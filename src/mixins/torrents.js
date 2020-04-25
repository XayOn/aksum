import magnet from 'magnet-uri';
import parsePath from 'parse-filepath';

const EBOOK_EXTENSIONS = [
    "epub", "mobi", "pdf", "lrf", "cbr", "cbz", "cb7", "cbt ", "cba ", "chm",
    "djvu", "doc", "docx", "pdb", "fb2", "ceb", "xeb", "html", "htm", "ibooks",
    "azw", "azw3", "kf8", "kfx", "lit", "prc", "opf", "pdg ", "ps", "xps", "lrx"
];

export default {
    data: function () {
        return {
            seed_enabled: JSON.parse(localStorage?.seed ? localStorage.seed : "false")
        }
    },
    methods: {
        disableTorrentIfNeeded: function (torrent) {
            if (!this.seed_enabled) {
                torrent.pause()
                torrent.deselect(0, torrent.pieces.length - 1, false)
                for (let file of torrent.files) {
                    file.deselect()
                }
            }
        },
        torrentUrls: function () {
            let list = localStorage.torrent_list
                ? JSON.parse(localStorage.torrent_list)
                : [];
            return list.filter((a)=>a.category && a.decoded.xt)
        },
        getTorrentFile: function (client, fullTorrent, filePath) {
            let resolveFunc = null;
            let result = new Promise(function (resolve) {
                resolveFunc = resolve;
            })
            let parsed = magnet.decode(fullTorrent);

            parsed['tr'].push('wss://tracker.openwebtorrent.com/')
            let torrent = client.get(parsed.infoHash)
            let file = torrent.files.find((file) => {
                return file.path == filePath
            });
            torrent.resume()

            file.getBlobURL((err, url) => {
                this.disableTorrentIfNeeded(torrent)
                return resolveFunc(url);
            })
            return result;
        },
        getTorrentFiles: function (client, torrentOrigin) {
            let parsed = magnet.encode(torrentOrigin.decoded);

            let resolveFunc = null;
            let result = new Promise(function (resolve) {
                resolveFunc = resolve;
            })
            client.add(parsed, torrent => {
                this.disableTorrentIfNeeded(torrent)
                let torrentList = []

                for (let file of torrent.files) {
                    let parsedPath = parsePath(file.path);
                    let ext = parsedPath.ext.substring(1);
                    if (EBOOK_EXTENSIONS.indexOf(ext) != -1) {
                        torrentList.push({
                            filePath: file.path,
                            downloadName: `${parsedPath.name}${parsedPath.ext}`,
                            torrent: torrentOrigin.decoded.infoHash,
                            label_name: `[${ext}] ${parsedPath.name}`,
                            fullTorrent: torrentOrigin.torrent
                        });
                    }
                }
                resolveFunc(torrentList)
            });
            return result
        },
        addTorrent: (list, torrentOrigin, category) => {
            let bthi = magnet.decode(torrentOrigin).xt
            if (!list.some(a => a?.decoded?.xt == bthi)) {
                let decoded = magnet.decode(torrentOrigin)
                decoded['tr'].push('wss://tracker.openwebtorrent.com/')
                let new_torrent = {
                    category: category,
                    decoded: decoded,
                    torrent: torrentOrigin
                };
                localStorage.torrent_list = JSON.stringify([...list, new_torrent]);
                return new_torrent
            }
        }
    },
}
