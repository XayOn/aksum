# aksum - Decentralized, client-side library

<h1 align="center"><br><a href="https://davidfrancos.net/aksum/"><img src="https://raw.githubusercontent.com/xayon/aksum/master/logo.png" alt="AKSUM" width="600"></a></h1>

AKSUM is a decentralized book download tool.
It allows you to download specific books from webtorrents.

<p align="center">
  <a href="#features">Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#tecnology">Tecnology</a> •
</p>

![Screenshot](https://raw.githubusercontent.com/xayon/aksum/master/screenshot.png "Screenshot")

## Features
AKSUM is:

- Decentralized
- Completely client-side (static page, no server required)
- Simple to use


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

- [WebTorrent](webtorrent.io)
- [Axios](https://github.com/axios/axios)
- [VueJS](vuejs.org)
- [VuetifyJS](vuetifyjs.com/)
