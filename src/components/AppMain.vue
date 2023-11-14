<template>
  <div class="search-results">
    <div class="genres">
      <span v-for="genre in store.genres">{{ genre }}</span>
    </div>
    <div v-if="moviesCount" class="container">
      <h2>Movies</h2>
      <div class="movies">
        <AppCard
          v-for="currentMovie in movies"
          :key="currentMovie.id"
          :item="currentMovie"
          category="film"
          @click="emitMovieDetails(currentMovie.id)"
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
          category="tv"
          @click="emitTvDetails(currentSeries.id)"
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
    emitMovieDetails(id) {
      return this.$emit("movieDetails", id);
    },
    emitTvDetails(id) {
      return this.$emit("tvDetails", id);
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

  .genres {
    padding: 20px 40px 0 40px;
    color: white;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 24px;
    span {
      opacity: 0.6;
      user-select: none;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }

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
