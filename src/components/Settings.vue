<!--
Append source
-->
<template>
  <v-container>
    <h2 class="text-center">Edit book sources (Torrent links)</h2>

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
      dark
    >Delete selected torrents</v-btn>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
import TorrentMixin from "../mixins/torrents.js";
export default {
  name: "Settings",
  mixins: [TorrentMixin],
  data: function() {
    return {
      display: false,
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
