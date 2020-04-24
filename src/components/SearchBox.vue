<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" offset="1">
        <v-select
          v-model="category"
          :items="categories"
          menu-props="auto"
          :label="$t('select_category')"
          hide-details
        ></v-select>
      </v-col>
      <v-col cols="12" md="6">
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
      </v-col>
    </v-row>
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
      let books = this.$t("books");
      let search = this.$t("search");
      let label = `${search} ${this.books.length} ${books}`;
      if (this.loading) {
        label = this.$t("loading");
      } else if (this.categories.lenght != 1 && !this.category) {
        label = this.$t("select_category_first");
      } else if (this.books.length == 0 && this.torrents.length == 0) {
        label = this.$t("no_data_sources");
      }
      return label;
    },
    loading: function() {
      if (this.downloading) {
        return true;
      }
      return (
        (this.books.length == 0 &&
          this.torrents.length != 0 &&
          this.categories.lenght == 1) ||
        (this.books.length == 0 &&
          this.torrents.length != 0 &&
          this.categories.lenght != 1 &&
          this.category != false)
      );
    },
    categories: function() {
      return this.torrents.map(a => a.category);
    }
  },
  watch: {
    category: {
      handler() {
        this.$emit("categoryChanged");
        for (let torrent of this.torrents) {
          if (this.category == torrent.category) {
            this.$emit("torrentAdded", torrent);
          }
        }
      }
    }
  },
  data: function() {
    return {
      downloading: false,
      value: "",
      category: false,
      blobName: "",
      fullTorrent: false,
      blobUrl: false
    };
  },
  methods: {
    selectedItem: async function() {
      this.blobUrl = false;
      this.downloading = true;
      this.fullTorrent = this.value.fullTorrent;
      this.blobUrl = await this.getTorrentFile(
        this.client,
        this.value.fullTorrent,
        this.value.filePath
      );
      this.$emit("fileDownloaded");
      this.blobName = this.value.downloadName;
      this.downloading = false;
    }
  }
};
</script>
