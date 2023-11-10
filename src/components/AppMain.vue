<template>
  <main>
    <div>
      <ul>
        <li v-for="(movie, index) in store.movies">
          <ul>
            <li><span>Title: </span>{{ movie.title }}</li>
            <li><span>Original Title: </span>{{ movie.original_title }}</li>
            <li><span>Language: </span>{{ movie.original_language }}</li>
            <li><span>Vote Average: </span>{{ movie.vote_average }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import store from "../store.js";
export default {
  data() {
    return {
      store,
    };
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
  margin-bottom: 20px;
  span {
    font-weight: bold;
  }
}
</style>
