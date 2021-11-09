<template>
  <div>
    <h1>This is an about {{ $route.params.id }}</h1>
    <div v-for="cast in casts" :key="cast.id">
      <h2>{{ cast.character }} || {{ cast.name }}</h2>
      <img
        :src="`https://image.tmdb.org/t/p/original/${cast.profile_path}`"
        width="100"
        height="100"
        :alt="cast.name"
         
      />
      <router-link :to="{ name: 'Person', params: { idPerson: cast.id } }">
        see actor
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      casts: "",
    };
  },
  async mounted() {
    const { id } = this.$route.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e3c3595204a142ec627688c9ea2ad00f&language=en-US`
    );
    const data = response.data;
    this.casts = data.cast;
  },

};
</script>