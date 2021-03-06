<template>
  <v-app>
    <v-row>
      <v-col cols="1" offset="11">
        <v-bottom-sheet v-model="showSettings" persistent>
          <template v-slot:activator="{ on }">
            <v-btn class="mt-2" icon :dark="dark" v-on="on">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </template>
          <v-sheet class="text-center">
            <v-btn
              class="mt-6 col-md-offset-7 col-md-1"
              text
              color="error"
              @click="showSettings = !showSettings"
            >{{$t('close')}}</v-btn>
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
          <p class="text-center col-md-6 offset-md-3 display-1">{{$t('subheader')}}</p>
        </v-row>
        <v-row>
          <SearchBox
            v-if="!showSettings"
            :client="client"
            v-on:torrentAdded="torrentAdded"
            v-on:categoryChanged="categoryChanged"
            v-on:fileDownloaded="fileDownloaded"
            :torrents="torrents"
            :books="books"
          />
        </v-row>

        <v-row>
          <v-alert outlined type="success" class="mt-12 col-md-6 offset-md-3">
            <b>{{$t('patient')}}</b>
            <br />
            {{$t('patient_subheader')}}
            <br />
            <v-divider class="mt-3 mb-3"></v-divider>
            {{$t('patient_contribute')}}
            <br />
          </v-alert>
        </v-row>
        <v-divider class="mt-12 mb-12"></v-divider>

        <v-row>
          <v-col sm="3" cols="12">
            <v-card class="mx-auto" tile>
              <v-list flat>
                <v-subheader>{{$t('links')}}</v-subheader>
                <v-list-item-group v-model="selectedLink" color="primary">
                  <v-list-item v-for="(item, i) in links" :key="i">
                    <v-list-item-icon v-if="item.text">
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content v-if="item.text">
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4" class="text-center mt-4" offset-md="1">
            <p>
              {{$t('hosted_on')}}
              <a href="https://pages.github.com/">github pages</a>
              .
              {{$t('hosted_on_endorsed')}}
              <br />
              {{$t('hosted_on_example')}}
            </p>
          </v-col>

          <v-col cols="12" sm="3" offset-md="1">
            <v-card class="mx-auto" tile>
              <v-list disabled>
                <v-subheader>{{$t('status_title')}}</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-cog</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{status}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-database</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{progress}} %</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-speedometer</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{downloadSpeed}}/{{uploadSpeed}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{peers}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
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
    },
    peers: function() {
      let total = 0;
      for (let torrent of this.client.torrents) {
        total += torrent.numPeers;
      }
      return total;
    },
    dark: function() {
      return JSON.parse(localStorage?.dark ? localStorage.dark : "true");
    },
    categories: function() {
      return this.torrents.map(a => a.category);
    },
    links: function() {
      return [
        {
          href: "http://davidfrancos.net",
          icon: "mdi-home",
          text: this.$t("love")
        },
        {
          href: "https://github.com/XayOn/aksum",
          text: this.$t("star"),
          icon: "fa-github"
        },
        {
          href: this.link,
          text: this.link,
          icon: "mdi-share-variant"
        }
      ];
    }
  },
  methods: {
    categoryChanged: function() {
      this.books = [];
    },
    fileDownloaded: function() {
      this.downloadSpeed = 0;
      this.uploadSpeed = 0;
      this.status = "Ready";
    },
    torrentDeleted: async function(item) {
      this.torrents = this.torrentUrls();
      this.books = this.books.filter(
        value => value.infoHash == item.decoded.infoHash
      );
    },

    torrentAdded: async function(item) {
      this.status = "Loading metadata";
      this.books.push(...(await this.getTorrentFiles(this.client, item)));
      this.status = "Ready";
      this.torrents = this.torrentUrls();
    }
  },
  data: function() {
    return {
      selectedLink: false,
      selectedCategory: false,
      torrents: [],
      status: "Ready",
      books: [],
      dialog: false,
      downloadSpeed: 0,
      uploadSpeed: 0,
      progress: 0,
      showSettings: false,
      client: new WebTorrent()
    };
  },
  watch: {
    selectedLink: {
      handler() {
        window.location.href = this.links[this.selectedLink].href;
      }
    }
  },
  async created() {
    window.client = this.client;

    this.client.on("download", () => {
      this.status = "Downloading";
      this.downloadSpeed = (this.client.downloadSpeed / 1024).toFixed(2);
      this.uploadSpeed = (this.client.uploadSpeed / 1024).toFixed(2);
      this.progress = (this.client.progress * 100).toFixed(2);
    });

    this.client.on("noPeers", function(announceType) {
      console.log(`No peers for ${announceType}`);
    });

    this.$vuetify.theme.dark = this.dark;
    try {
      for (let url of this.getFromBTData(this.query_string["btdata"])) {
        this.addTorrent(this.torrentUrls(), url.magnet, url.category);
      }
    } catch (err) {
        console.log(`Could not load url data ${err}`);
    }
    this.torrents = this.torrentUrls();

    for (let item of this.torrentUrls()) {
      if (this.categories.lenght == 1) {
        await this.torrentAdded(item);
      }
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
  font-size: 1.5em;
}
.justify-content {
  text-align: justify;
}
</style>
