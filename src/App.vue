<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"
      rel="stylesheet"
    />
    <v-app-bar :collapse-on-scroll="true" absolute color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <b>aksum</b> &nbsp; Torrent-based open library
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-on:click="showSettings=!showSettings" color="white">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content class="body">
      <Settings v-if="showSettings" v-on:torrentAdded="torrentAdded" :client="client" />
      <SearchBox v-if="!showSettings" :books="books" />
    </v-content>
  </v-app>
</template>

<script>
import SearchBox from "./components/SearchBox";
import Settings from "./components/Settings";
import WebTorrent from "../node_modules/webtorrent/webtorrent.min.js";
import GistMixin from "./mixins/gist.js";
import QueryMixin from "./mixins/querystring.js";
import TorrentMixin from "./mixins/torrents.js";

export default {
  name: "App",
  mixins: [GistMixin, QueryMixin, TorrentMixin],
  components: {
    SearchBox,
    Settings
  },
  methods: {
    torrentUrls: function() {
      return localStorage.torrent_list
        ? JSON.parse(localStorage.torrent_list)
        : [];
    },
    torrentAdded: async function(item) {
      console.log(`Added torrent ${item.torrent}`);
      this.books = [
        ...this.books,
        ...(await this.getTorrentFiles(this.client, item))
      ];
      console.log(`Updated file list. Current ${this.books.length}`);
    }
  },
  data: function() {
    return {
      books: [],
      showSettings: false,
      client: new WebTorrent()
    };
  },
  async created() {
    this.$vuetify.theme.dark = true;
    let gist = this.query_string["gist"];
    if (gist) {
      for (let url of await this.getFromGist(gist.split('_'))) {
        this.addTorrent(this.torrentUrls(), url);
      }
    }
    for (let item of this.torrentUrls()) {
      this.torrentAdded(item);
    }
  }
};
</script>

<style scoped>
.body {
  margin-top: 200px;
}
</style>
