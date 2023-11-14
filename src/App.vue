<template>
  <div class="app">
    <AppHeader @search="searchDB" />
    <AppMain @credits="itemCredits" />
  </div>
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
    itemCredits(id) {
      store.fetchCredits(id);
    },
  },
};
</script>

<style lang="scss">
@use "./styles/partials/reset";
@use "./styles/general.scss";
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
</style>
