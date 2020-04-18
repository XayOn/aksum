export default {
    methods: {
        getTorrentFiles: (client, torrent_origin) => {
            let resolve_func = null;
            const response = new Promise(function (resolve) {resolve_func = resolve;})
            const files = [];
            client.add(torrent_origin.torrent, torrent => {
                for (let file of torrent.files) {
                    files.push({
                        torrent: torrent,
                        label_name: file.path
                    });
                }
                resolve_func(files);
            });
            return response;
        },
        addTorrent: (list, torrent_origin) => {
            if (!list.some(a => a.torrent == torrent_origin)) {
                localStorage.torrent_list = JSON.stringify([...list, {torrent: torrent_origin}]);
            }
        }
    },
}
