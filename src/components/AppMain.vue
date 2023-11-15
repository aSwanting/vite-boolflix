<template>
  <div class="search-results">
    <div class="genres">
      <span
        v-for="(genre, index) in store.genres"
        @click="genreFilter(index)"
        :class="{ active: currentGenre === index }"
        >{{ genre.name }}</span
      >
    </div>
    <div v-if="moviesCount" class="container">
      <h2>Movies</h2>
      <div class="movies">
        <AppCard
          v-for="currentMovie in movies"
          :key="currentMovie.id"
          :item="currentMovie"
          category="film"
          ref="movieCards"
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
          ref="tvCards"
          @click="emitTvDetails(currentSeries.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick } from "vue";
import store from "../store.js";
import AppCard from "./AppCard.vue";
export default {
  data() {
    return {
      store,
      currentGenre: -1,
      genreId: null,
      cards: [],
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
    genreFilter(index) {
      if (this.currentGenre !== index) {
        this.currentGenre = index;
        this.genreId = this.store.genres[this.currentGenre].id;
      } else {
        this.currentGenre = -1;
        this.genreId = null;
      }
    },
    filterCards() {
      this.cards.forEach((element) => {
        if (!this.genreId || element.genre.includes(this.genreId)) {
          element.$el.style.display = "block";
        } else if (!element.genre.includes(this.genreId)) {
          element.$el.style.display = "none";
        }
      });
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
  watch: {
    moviesCount() {
      nextTick(() => {
        this.cards = [...this.$refs.movieCards, ...this.$refs.tvCards];
        this.filterCards();
      });
    },
    genreId() {
      this.filterCards();
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

      &:hover,
      &.active {
        opacity: 1;
      }
      &.active {
        color: red;
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
