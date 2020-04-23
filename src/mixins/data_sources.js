import magnet from 'magnet-uri';

function* getFromBTData(data) {
    if (!data) {
        return []
    }
    if (data.endsWith(';')) {
        data = data.slice(0, -1);
    }
    let sdata = data.split(';');
    for (let torrent of sdata) {
        torrent = torrent.split(':');
        yield {
            category: atob(torrent[0]),
            magnet: magnet.encode({
                xt: [`urn:btih:${torrent[1]}`],
                dn: atob(torrent[2]),
                tr: ['wss://tracker.openwebtorrent.com', 'wss://tracker.btorrent.xyz']
            })
        }
    }
}

function exportToBTData(links) {
    let result = "";
    for (let link of links) {
        result += `${btoa(link.category)}:${link.decoded["xt"].split(':')[2]}:${btoa(link.decoded["dn"])};`;
    }
    return result
}

export default {
    methods: {
        exportToBTData: exportToBTData,
        getFromBTData: getFromBTData
    }
}
