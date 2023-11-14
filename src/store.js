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
  genres: [],
  currentGenres: [],

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
      this.details.genres.forEach((element) => {
        this.currentGenres.push(element.name);
      });
      console.log(this.currentGenres);
    });
  },
  fetchGenres() {
    const data = [];
    const endpoints = [
      `https://api.themoviedb.org/3/genre/movie/list`,
      `https://api.themoviedb.org/3/genre/tv/list`,
    ];
    const requests = endpoints.map((endpoint) =>
      axios.get(endpoint, {
        params: {
          api_key: this.API_KEY,
        },
      })
    );
    axios.all(requests).then((res) => {
      res.map((item) => {
        item.data.genres.forEach((element) => {
          data.push(element);
        });
      });
      const ids = data.map(({ id }) => id);
      this.genres = data.filter(
        ({ id }, index) => !ids.includes(id, index + 1)
      );
      this.genres.sort((a, b) => {
        const genreA = a.name.toUpperCase();
        const genreB = b.name.toUpperCase();
        if (genreA < genreB) {
          return -1;
        }
        if (genreA > genreB) {
          return 1;
        }
        return 0;
      });
      console.log(this.genres);
    });
  },
});

export default store;
