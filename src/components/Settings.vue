<!--
Append source
-->
<template>
  <v-container>
    <h2 class="text-center">{{$t('settings_sources_title')}}</h2>
    <v-row>
      <v-col cols="12" md="1">
        <v-text-field :label="$t('category')" v-model="category"></v-text-field>
      </v-col>
      <v-col cols="12" md="10">
        <v-text-field
          v-model="torrent_uri"
          @keydown.enter="AddSource"
          @click:append-outer="AddSource"
          append-outer-icon="mdi-plus"
          :label="$t('magnet')"
          placeholder="magnet:?xt=urn:mhi:afffa"
          :loading="loading"
        ></v-text-field>
      </v-col>
    </v-row>
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
    >{{$t('delete_button')}}</v-btn>
    <v-divider class="mt-10 mb-10"></v-divider>
    <h2>{{$t('advanced_settings')}}</h2>
    <v-switch v-model="seed" :label="$t('seed_label')"></v-switch>
    <v-switch v-model="dark" :label="$t('dark_label')"></v-switch>
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
      category: "",
      dark: JSON.parse(localStorage?.dark ? localStorage.dark : "true"),
      display: false,
      seed: JSON.parse(localStorage?.seed ? localStorage.seed : "false"),
      torrent_uri: "",
      torrent_list: JSON.parse(
        localStorage.torrent_list ? localStorage.torrent_list : "[]"
      ),
      headers: [
        { text: this.$t("category"), align: "start", value: "category" },
        { text: this.$t("name"), align: "start", value: "decoded.name" },
        { text: this.$t("hash"), align: "start", value: "decoded.infoHash" }
      ],
      selected: [],
      loading: false
    };
  },
  methods: {
    AddSource: async function() {
      this.loading = true;
      let added_torrent = this.addTorrent(
        this.torrent_list,
        this.torrent_uri,
        this.category
      );
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
