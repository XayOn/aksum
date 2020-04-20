<template>
  <v-container>
    <v-autocomplete
      :items="books"
      item-key="label_name"
      color="white"
      item-text="label_name"
      :return-object="true"
      v-model="value"
      :loading="loading"
      v-on:change="selectedItem"
      :label="searchLabel"
    >
      <template v-slot:append-outer>
        <v-btn
          v-if="blobUrl"
          v-on:click="destroyTorrent"
          :download="blobName"
          :href="blobUrl"
          icon
          color="green"
        >
          <v-icon>mdi-download</v-icon>
        </v-btn>
      </template>
    </v-autocomplete>
  </v-container>
</template>

<script>
import TorrentMixin from "../mixins/torrents.js";
export default {
  name: "SearchBox",
  props: ["books", "torrents", "client"],
  mixins: [TorrentMixin],
  computed: {
    searchLabel: function() {
      let label = `Search ${this.books.length} books`;
      if (this.books.length == 0 && this.torrents.length != 0) {
        label = "Loading...";
      } else if (this.books.length == 0 && this.torrents.length == 0) {
        label = "No data sources available";
      }
      return label;
    },
    loading: function() {
      if (this.downloading) {
        return true;
      }
      return this.books.length == 0 && this.torrents.length != 0;
    }
  },
  data: function() {
    return {
      downloading: false,
      value: "",
      blobName: "",
      fullTorrent: false,
      blobUrl: false
    };
  },
  methods: {
    destroyTorrent: function() {
      this.client.get(this.fullTorrent).destroy();
    },
    selectedItem: async function() {
      this.downloading = true;
      this.fullTorrent = this.value.fullTorrent;
      this.blobUrl = await this.getTorrentFile(
        this.client,
        this.value.fullTorrent,
        this.value.filePath
      );
      this.blobName = this.value.downloadName;
      this.downloading = false;
    }
  }
};
</script>
