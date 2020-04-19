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
        <v-btn v-if="blobUrl" :download="blobName" :href="blobUrl" icon color="green">
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
  props: ["books"],
  mixins: [TorrentMixin],
  data: function() {
    let torrents = this.torrentUrls();
    let label = `Search ${this.books.length} books`;
    if (this.books.length == 0 && torrents.length != 0) {
      label = "Loading...";
    } else if (this.books.length == 0 && torrents.length == 0) {
      label = "No data sources available";
    }
    return {
      searchLabel: label,
      value: "",
      loading: this.books.length == 0 && torrents.length != 0,
      blobName: "",
      blobUrl: false
    };
  },
  methods: {
    selectedItem: function() {
      this.loading = true;
      this.blobUrl = false;
      this.blobName = this.value.file.path;
      this.value.file.getBlobURL((_, url) => {
        this.blobUrl = url;
        this.loading = false;
      });
    }
  }
};
</script>
