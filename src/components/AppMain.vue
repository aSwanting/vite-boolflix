<template>
  <main>
    <div class="search-results">
      <div class="movies">
        <h3>Movies</h3>
        <ul>
          <li v-for="(movie, index) in store.movies">
            <ul>
              <li><span>Title: </span>{{ movie.title }}</li>
              <li><span>Original Title: </span>{{ movie.original_title }}</li>
              <li><span>Vote Average: </span>{{ movie.vote_average }}</li>
              <li><span>Star Rating: </span>
                <span v-for="n in getStars(movie.vote_average)"> * </span>
                <span v-for="n in 5 - getStars(movie.vote_average)"> - </span>
              </li>
              <li><span>Language: </span>{{ movie.original_language }}</li>
              <li><img :src="getFlag(movie.original_language)" /></li>
              <li v-if="movie.backdrop_path"> <img :src="getImg(movie.backdrop_path)" /> </li>
              <li v-if="movie.poster_path"> <img :src="getImg(movie.poster_path)" /> </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="series">
        <h3>Series</h3>
        <ul>
          <li v-for="(series, index) in store.series">
            <ul>
              <li><span>Title: </span>{{ series.name }}</li>
              <li><span>Original Title: </span>{{ series.original_name }}</li>
              <li><span>Vote Average: </span>{{ series.vote_average }}</li>
              <li><span>Star Rating: </span>
                <span v-for="n in getStars(series.vote_average)"> * </span>
                <span v-for="n in 5 - getStars(series.vote_average)"> - </span>
              </li>
              <li><span>Language: </span>{{ series.original_language }}</li>
              <li> <img :src="getFlag(series.original_language)" /> </li>
              <li v-if="series.backdrop_path"> <img :src="getImg(series.backdrop_path)" /> </li>
              <li v-if="series.poster_path"> <img :src="getImg(series.poster_path)" /> </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import store from "../store.js";
import { getLanguage } from "language-flag-colors";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    getFlag(lang) {
      const countryCode = getLanguage(lang).countryCode.replace("ja", "jp");
      return `https://flagcdn.com/w160/${countryCode}.png`;
    },
    getImg(url) {
      if (url) return `http://image.tmdb.org/t/p/original${url}`
    },
    getStars(rating) {
      return Math.round(rating / 2)
    }
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 20px;
  margin: 20px;
  border: 2px solid grey;
  border-radius: 10px;
}

.search-results {
  display: flex;
  gap: 20px;

  h3 {
    text-align: center;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  .movies,
  .series {
    padding: 20px;
    border: 2px solid grey;
    border-radius: 10px;
    flex-basis: 50%;
  }

  ul {
    margin-bottom: 50px;

    li {
      margin-bottom: 5px;
    }

    span {
      font-weight: bold;
    }

    img {
      display: block;
      border: 1px solid rgb(200, 200, 200);
      width: 160px;
      aspect-ratio: 3 / 2;
      object-fit: cover;
    }
  }
}
</style>
