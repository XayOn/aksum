import magnet from 'magnet-uri';

function* getFromBTData(data) {
    if (!data) {
        return []
    }
    if (data.endsWith(';')){
        data = data.slice(0, -1);
    }
    let sdata = data.split(';');
    for (let torrent of sdata) {
        torrent = torrent.split(':');
        yield magnet.encode({
            xt: [`urn:btih:${torrent[0]}`],
            dn: atob(torrent[1]),
            tr: ['wss://tracker.openwebtorrent.com', 'wss://tracker.btorrent.xyz']
        })
    }
}

function exportToBTData(magnet_urls) {
    let result = "";
    for (let magnetlink of magnet_urls) {
        result += `${magnetlink.decoded["xt"].split(':')[2]}:${btoa(magnetlink.decoded["dn"])};`;
    }
    return result
}

export default {
    methods: {
        exportToBTData: exportToBTData,
        getFromBTData: getFromBTData
    }
}
