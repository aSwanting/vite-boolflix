<template>
  <div class="search-results">
    <div v-if="moviesCount" class="container">
      <h2>Movies</h2>
      <div class="movies">
        <AppCard
          v-for="currentMovie in movies"
          :key="currentMovie.id"
          :item="currentMovie"
          @click="emitCredits(currentMovie.id)"
          category="film"
        />
      </div>
    </div>

    <div v-if="seriesCount" class="container">
      <h2>Series</h2>
      <div class="series">
        <AppCard
          v-for="currentSeries in series"
          :key="currentSeries.id"
          :item="currentSeries"
          @click="emitCredits(currentSeries.id)"
          category="tv"
        />
      </div>
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
  methods: {
    emitCredits(id) {
      return this.$emit("credits", id);
    },
  },
  computed: {
    movies() {
      return this.store.movies;
    },
    series() {
      return this.store.series;
    },
    moviesCount() {
      return this.store.movies.length;
    },
    seriesCount() {
      return this.store.series.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.search-results {
  background-color: #292929;
  flex-grow: 1;
  overflow-y: auto;

  .container {
    padding: 40px;

    h2 {
      color: white;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    .movies,
    .series {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
  }
}
</style>
