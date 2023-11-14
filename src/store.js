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
  details: [],
  credits: [],
  cast: [],

  fetchData() {
    if (this.query.trim()) {
      this.movies = [];
      this.series = [];
      const requests = this.endpoints.map((endpoint) =>
        axios.get(endpoint, {
          params: {
            api_key: this.API_KEY,
            query: this.query,
          },
        })
      );
      axios.all(requests).then((res) => {
        [this.movies, this.series] = res.map((item) => item.data.results);
      });
    }
  },
  fetchDetails(type, id) {
    this.details = [];
    this.credits = [];
    const endpoints = [
      `https://api.themoviedb.org/3/${type}/${id}`,
      `https://api.themoviedb.org/3/${type}/${id}/credits`,
    ];

    const requests = endpoints.map((endpoint) =>
      axios.get(endpoint, {
        params: {
          api_key: this.API_KEY,
        },
      })
    );
    axios.all(requests).then((res) => {
      [this.details, this.credits] = res.map((item) => item.data);
      console.log(this.details, this.credits);
      this.cast = this.credits.cast.slice(0, 5);
    });
  },
});
export default store;
