<template>
  <header>
    <nav>
      <div class="logo"><a href="#" @click="reload()">BOOLFLIX</a></div>
      <div class="search">
        <input @keydown.enter="emitSearch()" v-model="userSearch" type="text" />
        <div class="search-icon" @click="emitSearch()">
          <fa-icon :icon="['fas', 'magnifying-glass']" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import store from "../store.js";

export default {
  emits: ["search"],
  data() {
    return {
      store,
      userSearch: "",
    };
  },
  methods: {
    emitSearch() {
      store.query = this.userSearch;
      this.userSearch = "";
      this.$emit("search");
    },
    reload() {
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 40px;
  background-color: black;
  flex-shrink: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  .logo {
    color: red;
    font-weight: 700;
    font-size: 28px;
    user-select: none;
    cursor: pointer;
  }

  .search {
    display: flex;
    gap: 20px;

    input {
      border-radius: 50px;
      padding: 5px 10px;
      width: 100%;
      min-width: 50px;
      outline: none;
      border: none;

      &:focus-visible {
        outline: none;
        border: none;
      }
    }

    .search-icon {
      color: white;
      font-size: 25px;
      opacity: 0.8;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
