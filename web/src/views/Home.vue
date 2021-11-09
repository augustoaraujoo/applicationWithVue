<template>
  <main class="main">
    <aside class="asideBar">
      <h1>Popular</h1>
    </aside>
    <section class="filmesPopulares">
      <ul v-for="filmePopular in filmesPopulares" :key="filmePopular.id">
        <img
          :src="`https://image.tmdb.org/t/p/original/${filmePopular.poster_path}`"
          width="280"
          height="280"
        />
        <h1 class="titleMovie">{{ filmePopular.title }}</h1>
        <li type="none">
          {{ filmePopular.adult }}
          {{ filmePopular.popularity }}
          {{ filmePopular.original_title }}
          {{ filmePopular.original_language }}
          {{ filmePopular.overview }}
        </li>

        <router-link :to="{ name: 'About', params: { id: filmePopular.id } }"
          >ℹ️</router-link
        >
      </ul>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      filmesPopulares: [],
    };
  },
  async mounted() {
    const api_key = "e3c3595204a142ec627688c9ea2ad00f";
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
      )
      .then((response) => {
        response.data;
        this.filmesPopulares = response.data.results;
        console.log(response.data);
      });
  },
};
</script>

<style >
.main {
  display: grid;
  grid-template-areas: "asideBar  filmesPopulares";
  grid-template-columns: 350px  1fr;
  grid-template-rows: 1fr;
  gap: 1px;
  height: auto;
  width: 100%;
}
.asideBar {
  grid-area: "asideBar";
  display: flex;
  justify-content:center;
  background-color: rgba(65, 105, 225, 0.137);
}
.filmesPopulares {
  grid-area: "filmesPopulares";
  background-color: rgba(255, 0, 0, 0.123);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
.filmesPopulares ul {
  flex: 1;
  display: flex;
  margin: 10px;
  background-color: rgba(0, 252, 134, 0.301);
}
.titleMovie {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.644);
}
.filmesPopulares li {
  display: flex;
  align-items: flex-start;
  justify-self: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 255, 0.171);
}
</style>