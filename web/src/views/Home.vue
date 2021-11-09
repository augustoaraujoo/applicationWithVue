<template>
  <main>
    <div class="filmesPopulares">
      <ul v-for="filmePopular in filmesPopulares" :key="filmePopular.id">
        <li>
          {{ filmePopular.adult }}
          {{ filmePopular.popularity }}
          {{ filmePopular.title }}
          {{ filmePopular.original_title }}
          {{ filmePopular.original_language }}
          {{ filmePopular.overview }}
        </li>
        <img
          :src="filmePopular.poster_path"
          height="40"
          width="40"
          alt="error"
        />
      <router-link :to="{ name: 'About', params: { id: filmePopular.id } }"
        >ℹ️</router-link
      >
      </ul>
    </div>
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
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e3c3595204a142ec627688c9ea2ad00f&language=en-US&page=1"
      )
      .then((response) => {
        response.data;
        this.filmesPopulares = response.data.results;
        console.log(response.data);
      });
  },
};
</script>
