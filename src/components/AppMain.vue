<template>
  <main>
    <div>
      <ul>
        <li v-for="(movie, index) in store.movies">
          <ul>
            <li><span>Title: </span>{{ movie.title }}</li>
            <li><span>Original Title: </span>{{ movie.original_title }}</li>
            <li><span>Language: </span>{{ movie.original_language }}</li>
            <li>
              <img :src="getFlag(movie.original_language)" />
            </li>
            <li><span>Vote Average: </span>{{ movie.vote_average }}</li>
          </ul>
        </li>
      </ul>
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

ul {
  margin-bottom: 30px;

  li {
    margin-bottom: 5px;
  }
  span {
    font-weight: bold;
  }

  img {
    display: block;
    border: 1px solid rgb(200, 200, 200);
    width: 50px;
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }
}
</style>
