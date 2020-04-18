<!--
Append source
-->
<template>
  <v-container>
    <h2 class="text-center">Add a new book source</h2>
    <v-text-field
      v-model="torrent_uri"
      @keydown.enter="AddSource"
      @click:append-outer="AddSource"
      append-outer-icon="mdi-plus"
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
  </v-container>
</template>

<script>
import TorrentMixin from "../mixins/torrents.js";
export default {
  name: "Settings",
  props: ["client"],
  mixins: [TorrentMixin],
  data: function() {
    return {
      display: false,
      torrent_uri: "",
      torrent_list: JSON.parse(localStorage.torrent_list),
      headers: [{ text: "File", align: "start", value: "torrent" }],
      selected: [],
      loading: false
    };
  },
  methods: {
    AddSource: async function() {
      this.loading = true;
      this.addTorrent(this.torrent_list, this.torrent_uri);
      this.torrent_list = [...this.torrent_list, { torrent: this.torrent_uri }];
      this.$emit("torrentAdded", { torrent: this.torrent_uri });
      this.loading = false;
    }
  }
};
</script>
