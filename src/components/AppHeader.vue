<template>
  <div>
    <input v-model="userSearch" type="text" />
    <button @click="emitSearch()">Search</button>
  </div>
</template>

<script>
import store from "../store.js";

export default {
  emits: ["search"],
  data() {
    return {
      store,
      userSearch: "",
    };
  },
  methods: {
    emitSearch() {
      store.query = this.userSearch;
      this.userSearch = "";
      this.$emit("search");
    },
  },
};
</script>

<style lang="scss" scoped></style>
