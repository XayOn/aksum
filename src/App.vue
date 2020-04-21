<template>
  <v-app>
    <v-row>
      <v-col cols="1" offset="11">
        <v-bottom-sheet v-model="showSettings" persistent>
          <template v-slot:activator="{ on }">
            <v-btn icon dark v-on="on">
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
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <h2 class="maintitle display-3 text-center mb-12">
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
          <SearchBox v-if="!showSettings" :client="client" :torrents="torrents" :books="books" />
        </v-row>

        <v-row>
          <v-alert outlined type="info" class="mt-12 col-md-4 offset-md-4">
            Tip: ¿Can't find a book?
            <br />Try the settings (
            <v-icon>mdi-cog</v-icon>) button to add custom torrent book sources.
          </v-alert>
        </v-row>
        <v-divider class="mt-12 mb-12"></v-divider>

        <v-row>
          <v-col cols="3">
            <v-row>
              <v-col cols="2">Share</v-col>
              <v-col cols="9">
                <p class="link-overflow text-centered">
                  <a :href="link">{{link}}</a>
                </p>
              </v-col>
              <v-col cols="1">
                <v-btn icon>
                  <v-icon class="middle_icon" size="large">mdi-clipboard-text</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <p class="justify-content">
                  Made with
                  <v-icon class="large-love">mdi-heart</v-icon>&nbsp;by
                  <a href="https://davidfrancos.net">David Francos</a>
                  to the world
                </p>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="2" class="text-center mt-4" offset="2">
            <a href="https://github.com/XayOn/aksum">
              <i class="large-gh fab fa-github"></i>
              <br />
              <p class>Fork me on github</p>
            </a>
          </v-col>

          <v-col cols="3" class="text-center mt-4" offset="2">
            <p>
              This site is hosted on
              <a href="https://pages.github.com/">github pages</a>. It does not host or endorse any illegal content. 
              <br />Examples provided on the official documentation provide a torrent of free, legal books wich hold
              <b>no copyright</b>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SearchBox from "./components/SearchBox";
import Settings from "./components/Settings";
import WebTorrent from "../node_modules/webtorrent/webtorrent.min.js";
import DataSourcesMixin from "./mixins/data_sources.js";
import QueryMixin from "./mixins/querystring.js";
import TorrentMixin from "./mixins/torrents.js";

export default {
  name: "App",
  mixins: [DataSourcesMixin, QueryMixin, TorrentMixin],
  components: {
    SearchBox,
    Settings
  },
  computed: {
    link: function() {
      let btlink = this.exportToBTData(this.torrents);
      if (btlink) {
        return window.location.href.split("?")[0] + "?btdata=" + btlink;
      }
      return "";
    }
  },
  methods: {
    torrentDeleted: async function(item) {
      this.torrents = this.torrentUrls();
      this.books = this.books.filter(
        value => value.infoHash == item.decoded.infoHash
      );
    },

    torrentAdded: function(item) {
      this.getTorrentFiles(this.client, item, this.books);
      this.torrents = this.torrentUrls();
    }
  },
  data: function() {
    return {
      torrents: [],
      books: [],
      showSettings: false,
      client: new WebTorrent()
    };
  },
  async created() {
      window.client = this.client;
    this.$vuetify.theme.dark = true;
    for (let url of this.getFromBTData(this.query_string["btdata"])) {
      this.addTorrent(this.torrentUrls(), url);
    }
    this.torrents = this.torrentUrls();

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
.link-overflow {
  overflow: auto;
  white-space: nowrap;
}
.large-love {
  font-size: 2em;
}
.large-gh {
  font-size: 4em;
}
.justify-content {
  text-align: justify;
}
</style>
