# aksum - Decentralized, client-side library

<h1 align="center"><br><a href="https://davidfrancos.net/aksum/"><img src="https://raw.githubusercontent.com/xayon/aksum/master/logo.png" alt="AKSUM" width="600"></a></h1>

AKSUM is a decentralized book download tool.
It allows you to download specific books from webtorrents.

<p align="center">
  <a href="#features">Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#tecnology">Tecnology</a> •
</p>

You can see it in action, with an open (copyright free) book torrent [here](http://davidfrancos.net/aksum/?btdata=1edc4805fc5121d29be52a9519b6bc22ea12759b:bGlicm9zIGxpYnJlcw==)

![Screenshot](https://raw.githubusercontent.com/xayon/aksum/master/screenshot.gif "Screenshot")

## Features
AKSUM is:

- Decentralized
- Completely client-side (static page, no server required)
- Simple to use

## How to use

To use AKSUM, if you've received it with a btdata link, just search on the books
bar for any book / author. After selecting one, you'll see a download button to
get your ebook. 

### Advanced

#### Adding torrents 

On the preferences page, you can find a torrent input, adding a torrent there
will store it in your browser, and only you will be able to see its books.

#### Sharing torrent urls 

You can share your torrent list, just use the "share" link after you've added your torrents



#### Seeding

If you want to contribute seeding, you can either keep the browser open, or
install a webtorrent client, such as [WebTorrent](webtorrent.io) or
[Vuze](https://vuze.com). Just use them with the magnets as you would with a
normal torrent. You can even create new torrents

### Official instance

The official instance is at <a href="https://davidfrancos.net/aksum">davidfrancos.net</a>.

You can host a local one by building it, and serving the dist files.

### Local installation
```
yarn install
```

#### Development 

You can serve it with
```
yarn serve
```

### Deploying to gh-pages 

If you fork this repository, you can simply build and deploy it to your
ghpages, given you have configured ghpages for that repo.

```
yarn build && yarn run deploy
```


## Technology

AKSUM is, basically, a web interface for WebTorrent that lists files that
"look" like an ebook, via file extension.

It allows you to download from multiple torrent sources, and keep torrent file
lists on gist.

For that matter, it uses the following libraries:

- [WebTorrent](https://webtorrent.io)
- [Axios](https://github.com/axios/axios)
- [VueJS](https://vuejs.org)
- [VuetifyJS](https://vuetifyjs.com/)


