<template>
  <div class="app">
    <AppHeader @search="searchDB" />
    <AppMain @movieDetails="movieDetails" @tvDetails="tvDetails" />
    <AppCardModal @closeModal="closeModal" v-if="modalOpen" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppCardModal from "./components/AppCardModal.vue";
import store from "./store.js";
export default {
  components: {
    AppHeader,
    AppMain,
    AppCardModal,
  },
  data() {
    return {
      store,
      modalOpen: false,
    };
  },
  methods: {
    searchDB() {
      store.fetchData();
    },
    movieDetails(id) {
      store.fetchDetails("movie", id);
      this.modalOpen = true;
    },
    tvDetails(id) {
      store.fetchDetails("tv", id);
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
  created() {
    store.fetchGenres();
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
