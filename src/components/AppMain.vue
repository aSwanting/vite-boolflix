<template>
  <div class="search-results">
    <h2>Movies</h2>
    <div class="movies">
      <AppCard
        v-for="currentMovie in movies"
        :item="currentMovie"
        category="film"
      />
    </div>
    <h2>Series</h2>
    <div class="movies">
      <AppCard
        v-for="currentSeries in series"
        :item="currentSeries"
        category="tv"
      />
    </div>
  </div>
</template>

<script>
import store from "../store.js";
import AppCard from "./AppCard.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppCard,
  },
  computed: {
    movies() {
      return this.store.movies;
    },
    series() {
      return this.store.series;
    },
  },
};
</script>

<style lang="scss" scoped>
.search-results {
  background-color: #292929;
  padding: 0 40px;
  flex-grow: 1;
  overflow-y: auto;
  h2 {
    color: white;
    text-transform: uppercase;
    margin-block: 30px;
  }
  .movies,
  .series {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
}
</style>
