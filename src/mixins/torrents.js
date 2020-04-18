import magnet from 'magnet-uri';

const EBOOK_EXTENSIONS = [
    "epub", "mobi", "pdf", "lrf", "cbr", "cbz", "cb7", "cbt ", "cba ", "chm",
    "djvu", "doc", "docx", "pdb", "fb2", "ceb", "xeb", "html", "htm", "ibooks",
    "azw", "azw3", "kf8", "kfx", "lit", "prc", "opf", "pdg ", "ps", "xps", "lrx"
];

export default {
    methods: {
        getTorrentFiles: (client, torrent_origin) => {
            let resolve_func = null;
            const response = new Promise(function (resolve) {resolve_func = resolve;})
            const files = [];
            let parsed = magnet.encode(torrent_origin.decoded);
            client.add(parsed, torrent => {
                for (let file of torrent.files) {
                    let ext = file.path.split(".").pop().toLowerCase();
                    if (EBOOK_EXTENSIONS.indexOf(ext) != -1) {
                        files.push({torrent: torrent_origin.decoded.infoHash, file: file, label_name: file.path});
                    }
                }
                resolve_func(files);
            });
            return response;
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
