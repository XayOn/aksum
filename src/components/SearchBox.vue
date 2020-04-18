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
      label="Book"
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
export default {
  name: "SearchBox",
  props: ["books"],
  data: () => ({
    value: "",
    loading: false,
    blobName: "",
    blobUrl: false
  }),
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
