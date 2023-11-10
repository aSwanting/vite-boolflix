import { reactive } from "vue";
import axios from "axios";

const store = reactive({
  API_KEY: "e6c36204d368eb79057d546cfae14aba",
  searchMoviesUrl: "https://api.themoviedb.org/3/search/movie",
  query: "",
  movies: [],

  fetchData() {
    axios
      .get(this.searchMoviesUrl, {
        params: {
          api_key: this.API_KEY,
          query: this.query,
        },
      })
      .then((res) => {
        this.movies = res.data.results;
        console.log(this.movies);
      });
  },
});

export default store;
