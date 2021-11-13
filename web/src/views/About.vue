<template>
  <header class="container-all-navbar">
    <header>
      <nav class="nav-bar-container">
        <div class="nav-bar">
          <h1>{{ movies.original_title }}</h1>
          <input type="text" />
        </div>
        <aside class="aside">
          <div>
            <a href="#">watch</a>
          </div>
        </aside>
      </nav>

      <!-- <div class="castOfTheMovie" v-for="cast in casts" :key="cast.id">
      <h1>This is an about {{ $route.params.id }}</h1>
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
    </div> -->
    </header>
  </header>
  <main class="container-main">
    <div class="container-background">
      <img
        :src="`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`"
        class="image-movie-background"
      />
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      casts: "",
      movies: [],
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
  async created() {
    const { id } = this.$route.params;
    const api_key = "e3c3595204a142ec627688c9ea2ad00f";

    const getDetailsMovies = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
      )
      .then((response) => {
        const data = response.data;
        this.movies = data;
        console.log(data);
      });
    return getDetailsMovies;
  },
  methods: {},
};
</script>

<style>
.nav-bar-container {
  display: flex;
  align-items: center;
  height: 13vh;
  background: red;
}
.nav-bar {
  width: 70%;
  height: 5vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: chartreuse;
  margin-right: 10;
  padding: 5px;
}
.aside {
  background: rgb(48, 53, 42);
  padding: 5px;
  width: 40%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-movie-background {
 background-size: cover ;
 width:100%;
 height: 100%;
}
#containerBackgroundImage {
  -webkit-animation: containerBackgroundImage 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: containerBackgroundImage 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
}
@-webkit-keyframes containerBackgroundImage {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
@keyframes containerBackgroundImage {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
</style>