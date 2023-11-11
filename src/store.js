import { reactive } from "vue";
import axios from "axios";

const store = reactive({
  API_KEY: "e6c36204d368eb79057d546cfae14aba",
  endpoints: [
    "https://api.themoviedb.org/3/search/movie",
    "https://api.themoviedb.org/3/search/tv",
  ],
  query: "",
  movies: [],
  series: [],

  fetchData() {
    const requests = this.endpoints.map((endpoint) =>
      axios.get(endpoint, {
        params: {
          api_key: this.API_KEY,
          query: this.query,
        },
      })
    );
    axios.all(requests).then((res) => {
      [this.movies, this.series] = res.map(item => item.data.results)
      console.log(this.movies, this.series);
    });
  },
});

export default store;
