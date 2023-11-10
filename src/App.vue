<template>
  <div><AppHeader @search="searchDB" /></div>
  <div><AppMain /></div>
</template>

<script>
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import store from "./store.js";
export default {
  components: {
    AppMain,
    AppHeader,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    searchDB() {
      store.fetchData();
    },
  },
};
</script>

<style lang="scss"></style>
