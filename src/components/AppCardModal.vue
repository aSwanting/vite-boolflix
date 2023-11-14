<template>
  <div class="modalOverlay" @click.self="$emit('closeModal')">
    <div class="modal">
      <ul>
        <li>
          <h1>{{ title }}</h1>
        </li>
        <li>{{ overview }}</li>
        <ul class="cast">
          <li v-for="n in castCount">
            <div class="portrait">
              <img v-show="castPhoto(n)" :src="castPhoto(n - 1)" alt="" />
            </div>
            <p class="name">{{ castName(n - 1) }}</p>
            <p class="character">{{ castCharacter(n - 1) }}</p>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    castPhoto(n) {
      if (this.cast[n]) {
        const url = `http://image.tmdb.org/t/p/original${this.cast[n].profile_path}`;
        return url;
      }
    },
    castName(n) {
      if (this.cast[n]) {
        const name = this.cast[n].name;
        return name;
      }
    },
    castCharacter(n) {
      if (this.cast[n]) {
        const character = this.cast[n].character;
        return character;
      }
    },
  },
  computed: {
    details() {
      return this.store.details;
    },
    cast() {
      return this.store.credits.cast;
    },
    title() {
      return this.details.title ?? this.details.name;
    },
    overview() {
      return this.details.overview;
    },
    castCount() {
      return this.cast.length > 5 ? 5 : this.cast.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.modalOverlay {
  inset: 0;
  position: fixed;
  background: rgb(88, 20, 54);
  background: linear-gradient(
    30deg,
    rgba(88, 20, 54, 0.5) 0%,
    rgba(33, 33, 33, 0.5) 100%
  );
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    background-color: rgba(44, 44, 44, 0.8);
    color: white;
    width: 100%;
    max-width: 800px;
    box-shadow: 13px 12px 20px 0px rgb(0 0 0 / 29%);
    border-radius: 25px;
    padding: 30px;
    li {
      margin-bottom: 20px;
    }
    .cast {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: minmax(0, 1fr);
      gap: 20px;

      li {
        text-align: center;
      }

      .name {
        font-size: 14px;
      }
      .character {
        font-size: 12px;
        font-style: italic;
      }
      .portrait {
        overflow: hidden;
        aspect-ratio: 1;
        background-color: #3f3f3f;
        border-radius: 50%;
        margin: 0 auto;
        margin-bottom: 8px;
        max-height: 120px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: 13px 12px 20px 0px rgb(0 0 0 / 29%);
      }
    }
  }
}
</style>
