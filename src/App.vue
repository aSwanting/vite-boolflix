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
    AppHeader,
    AppMain,
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

<style lang="scss">
@use "./styles/partials/reset";
@use "./styles/general.scss";
</style>
