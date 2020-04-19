import magnet from 'magnet-uri';
import parsePath from 'parse-filepath';

const EBOOK_EXTENSIONS = [
    "epub", "mobi", "pdf", "lrf", "cbr", "cbz", "cb7", "cbt ", "cba ", "chm",
    "djvu", "doc", "docx", "pdb", "fb2", "ceb", "xeb", "html", "htm", "ibooks",
    "azw", "azw3", "kf8", "kfx", "lit", "prc", "opf", "pdg ", "ps", "xps", "lrx"
];

export default {
    methods: {
        torrentUrls: function () {
            return localStorage.torrent_list
                ? JSON.parse(localStorage.torrent_list)
                : [];
        },
        getTorrentFiles: function (client, torrentOrigin, torrentList) {
            let parsed = magnet.encode(torrentOrigin.decoded);
            client.add(parsed, torrent => {
                for (let file of torrent.files) {
                    let parsedPath = parsePath(file.path);
                    let ext = parsedPath.ext.substring(1);
                    if (EBOOK_EXTENSIONS.indexOf(ext) != -1) {
                        torrentList.push({torrent: torrentOrigin.decoded.infoHash, file: file, label_name: `[${ext}] ${parsedPath.name}`});
                    }
                }
            });
        },
        addTorrent: (list, torrent_origin) => {
            if (!list.some(a => a.torrent == torrent_origin)) {
                let decoded = magnet.decode(torrent_origin)
                decoded['tr'].push('wss://tracker.openwebtorrent.com')
                let new_torrent = {decoded: decoded, torrent: torrent_origin};
                localStorage.torrent_list = JSON.stringify([...list, new_torrent]);
                return new_torrent
            }
        }
    },
}
