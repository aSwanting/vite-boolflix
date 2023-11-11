<template>
  <header>
    <div class="search">
      <input @keydown.enter="emitSearch()" v-model="userSearch" type="text" />
      <button @click="emitSearch()">Search</button>
    </div>
  </header>
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

<style lang="scss" scoped>
header {
  padding: 20px;
  margin: 20px;
  border: 2px solid grey;
  border-radius: 10px;
}
</style>
