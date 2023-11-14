<template>
  <div class="card">
    <img v-if="itemPoster" class="card-poster" :src="itemPoster" />
    <div v-else class="poster-placeholder">
      <h2>{{ title.translated }}</h2>
      <h4 v-if="date">{{ date }}</h4>
    </div>

    <div class="card-info">
      <ul>
        <li>
          <h2 class="bold">{{ title.translated }}</h2>
          <p v-show="translateTitle">{{ title.original }}</p>
          <p class="date" v-if="date">{{ date }}</p>
        </li>
        <li>
          <fa-icon
            class="star"
            v-for="star in 5"
            :icon="[star <= stars ? 'fas' : 'far', 'star']"
          />
        </li>
        <li><img class="flag" :src="flag" /></li>
        <li>{{ overview }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "../store.js";
import { getLanguage } from "language-flag-colors";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    category: String,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    title() {
      let translated;
      let original;
      switch (this.category) {
        case "film":
          translated = this.item.title;
          original = this.item.original_title;
          break;
        case "tv":
          translated = this.item.name;
          original = this.item.original_name;
          break;
      }
      return { translated, original };
    },
    translateTitle() {
      if (this.title.translated !== this.title.original) {
        return true;
      } else {
        return false;
      }
    },
    date() {
      let date;
      switch (this.category) {
        case "film":
          date = this.item.release_date;
          break;
        case "tv":
          date = this.item.first_air_date;
          break;
      }
      if (date) date = new Date(date).toLocaleDateString();
      return date;
    },
    overview() {
      return this.item.overview;
    },
    stars() {
      return Math.round(this.item.vote_average / 2);
    },
    flag() {
      const countryCode = getLanguage(
        this.item.original_language
      ).countryCode.replace("ja", "jp");
      return `https://flagcdn.com/h240/${countryCode}.png`;
    },
    itemPoster() {
      const url = this.item.poster_path;
      if (url) return `http://image.tmdb.org/t/p/original${url}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  background-color: rgb(20, 20, 20);
  color: white;
  box-shadow: 13px 12px 20px 0px rgb(0 0 0 / 29%);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  .card-poster {
    object-fit: cover;
    display: block;
    height: 100%;
  }
  .poster-placeholder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    padding: 20px;
    height: 100%;
    background: rgb(88, 20, 54);
    background: linear-gradient(
      30deg,
      rgb(88, 20, 54) 0%,
      rgba(33, 33, 33, 1) 100%
    );
    h2 {
      font-size: 28px;
      font-weight: 400;
    }
    h4 {
      font-size: 14px;
      font-weight: 300;
    }
  }
  .card-info {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: flex-end;
    transition: 300ms all;
    opacity: 0;
    &:hover,
    &.visible {
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
      opacity: 1;
    }
    .date {
      font-size: 12px;
      font-style: italic;
    }

    ul {
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding: 30px;

      li {
        margin-bottom: 10px;
      }
    }
  }
  .bold {
    font-weight: bold;
  }
  .star {
    color: rgb(221, 198, 70);
    font-size: 14px;
    padding-inline: 2px;
  }

  .flag {
    width: 32px;
    aspect-ratio: 3/2;
    margin-top: 6px;
  }
}
::-webkit-scrollbar {
  width: 5px;
}
</style>
