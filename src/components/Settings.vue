<!--
Append source
-->
<template>
  <v-container>
    <h2 class="text-center">Book sources (Magnet links)</h2>

    <v-text-field
      v-model="torrent_uri"
      @keydown.enter="AddSource"
      @click:append-outer="AddSource"
      append-outer-icon="mdi-plus"
      placeholder="Magnet link"
      :loading="loading"
      single-line
    ></v-text-field>

    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="torrent_list"
      item-key="torrent"
      show-select
    ></v-data-table>
    <v-btn
      @click="deleteSources"
      :disabled="this.selected.length == 0"
      color="red lighten-2"
      :dark="cdark"
    >Delete selected torrents</v-btn>
    <v-divider class="mt-10 mb-10"></v-divider>
    <h2>Advanced settings</h2>
    <v-switch v-model="seed" label="Keep seeding"></v-switch>
    <v-switch v-model="dark" label="Enable dark theme"></v-switch>
  </v-container>
</template>

<script>
import TorrentMixin from "../mixins/torrents.js";
export default {
  name: "Settings",
  mixins: [TorrentMixin],
  watch: {
    seed: {
      handler() {
        localStorage.seed = this.seed;
      }
    },
    dark: {
      handler() {
        localStorage.dark = this.dark;
        this.$vuetify.theme.dark = this.dark;
      }
    }
  },
  computed: {
    cdark: function() {
      return JSON.parse(localStorage?.dark ? localStorage.dark : "true");
    }
  },
  data: function() {
    return {
      dark: JSON.parse(localStorage?.dark ? localStorage.dark : "true"),
      display: false,
      seed: JSON.parse(localStorage?.seed ? localStorage.seed : "false"),
      torrent_uri: "",
      torrent_list: JSON.parse(
        localStorage.torrent_list ? localStorage.torrent_list : "[]"
      ),
      headers: [
        { text: "Name", align: "start", value: "decoded.name" },
        { text: "Hash", align: "start", value: "decoded.infoHash" }
      ],
      selected: [],
      loading: false
    };
  },
  methods: {
    AddSource: async function() {
      this.loading = true;
      let added_torrent = this.addTorrent(this.torrent_list, this.torrent_uri);
      if (added_torrent) {
        this.torrent_list = [...this.torrent_list, added_torrent];
        this.$emit("torrentAdded", added_torrent);
      }
      this.torrent_uri = "";
      this.loading = false;
    },
    deleteSources: function() {
      for (let element of this.selected) {
        this.$emit("torrentDeleted", element);
        this.torrent_list = this.torrent_list.filter(value => {
          return !this.selected.some(a => a.torrent == value.torrent);
        });
        localStorage.torrent_list = JSON.stringify(this.torrent_list);
      }
    }
  }
};
</script>
