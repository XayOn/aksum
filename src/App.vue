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

    <link
      href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
      rel="stylesheet"
    />

    <v-row>
      <v-col cols="1" offset="11">
        <v-bottom-sheet v-model="showSettings" persistent>
          <template v-slot:activator="{ on }">
            <v-btn color="rgba(0,0,0,0)" dark v-on="on" class="float-right">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </template>
          <v-sheet class="text-center">
            <v-btn class="mt-6" text color="error" @click="showSettings = !showSettings">close</v-btn>
            <Settings
              v-if="showSettings"
              v-on:torrentDeleted="torrentDeleted"
              v-on:torrentAdded="torrentAdded"
              :client="client"
            />
          </v-sheet>
        </v-bottom-sheet>
      </v-col>
    </v-row>
    <v-content class="body">
      <v-row class="text-center">
        <v-col cols="4" offset="4">
          <h2 class="maintitle display-3 mb-12">
            <v-icon class="middle_icon" size="xxx-large">mdi-book-open-variant</v-icon>
            <span>aksum</span>
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <p
          class="text-center col-md-6 offset-md-3 display-3"
        >Search and download books from torrents, directly from your browser</p>
      </v-row>
      <v-row>
        <SearchBox v-if="!showSettings" :books="books" />
      </v-row>
      <v-divider class="mt-12 mb-12"></v-divider>
      <v-row>
        <v-alert outlined type="info" class="mt-12 col-md-4 offset-md-4">
          Tip: ¿Can't find a book?
          <br />Try the settings (
          <v-icon>mdi-cog</v-icon>) button to add custom torrent book sources.
        </v-alert>
      </v-row>
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
    torrentDeleted: async function(item) {
      this.books = this.books.filter(
        value => value.infoHash == item.decoded.infoHash
      );
    },

    torrentAdded: async function(item) {
      this.books = [
        ...this.books,
        ...(await this.getTorrentFiles(this.client, item))
      ];
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
      let dirty = false;
      for (let url of await this.getFromGist(gist.split("_"))) {
        let new_torrent = this.addTorrent(this.torrentUrls(), url);
        if (new_torrent) {
          dirty = true;
        }
      }
      if (dirty) {
          // FML. Fix tomorrow. 
        window.location.reload();
      }
    }

    for (let item of this.torrentUrls()) {
      this.torrentAdded(item);
    }
  }
};
</script>

<style scoped>
.maintitle {
  font-family: "Comfortaa", cursive;
  font-weight: lighter;
}
.middle_icon {
  margin-top: -0.15em;
  margin-right: 0.25em;
}
</style>
