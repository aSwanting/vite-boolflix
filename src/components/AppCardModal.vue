<template>
  <div class="modalOverlay" @click.self="$emit('closeModal')">
    <div class="modal">
      <h1>info</h1>

      <ul>
        <li>{{ title }}</li>
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
  computed: {
    title() {
      return this.store.movieDetails.title ?? this.store.tvDetails.name;
    },
    // movieDetails() {
    //   return this.store.movieDetails;
    // },
    // tvDetails() {
    //   return this.store.tvDetails;
    // },
    // movieCast() {
    //   return this.store.movieCredits.cast;
    // },
    // tvCast() {
    //   return this.store.tvCredits.cast;
    // },
    // castPhoto() {
    //   this.cast.forEach((castMember) => {
    //     console.log(castMember);
    //     // const url = castMember.profile_path;
    //     // if (url) return `http://image.tmdb.org/t/p/original${url}`;
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.modalOverlay {
  inset: 0;
  position: fixed;
  background-color: rgb(255, 255, 255, 0.356);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    background-color: white;
    width: 100%;
    max-width: 600px;
    // transform: translate(-50%, -50%);
    border-radius: 25px;
    padding: 30px;
    li {
      margin-bottom: 20px;
    }
    img {
      width: 80px;
    }
  }
}
</style>
