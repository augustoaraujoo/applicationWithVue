<template>
  <!-- <h1>{{ movies.original_title }}</h1> -->
  <header class="parent">
    <div class="div1">a</div>
    <div class="div2">b</div>
    <div>c</div>
    <div class="div4">d</div>

    <div class="div1">a</div>
    <div class="div4">d</div>
    <div class="back"></div>
    <div class="div4">d</div>
  </header>
  <main></main>
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
        console.log(data);
        this.movies = data;

        const parent = document.querySelector(".parent");
        parent.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${this.movies.backdrop_path})`;
        return;
      });
    return getDetailsMovies;
  },
  methods: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}
.parent {
  height: 100vh;
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-template-rows: 10vh 10vh;
  gap: 2px;
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
}

.div1 {
  background: rgba(255, 0, 0, 0.158);
}

.div2 {
  background: rgba(0, 0, 0, 0.699);
}

.div3 {
  background: rgba(221, 8, 8, 0.911);
}

.div4 {
  background: rgba(223, 190, 190, 0.295);
}
.container-background {
  -webkit-animation: container-background 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: container-background 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes container-background {
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
@keyframes container-background {
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