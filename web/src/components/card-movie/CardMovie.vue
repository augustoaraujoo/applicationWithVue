<template>
  <section class="container-filmes-populares">
    <div class="filmes-populares">
      <ul
        class="card-movie"
        v-for="filmePopular in filmesPopulares"
        :key="filmePopular.id"
      >
        <li class="informations-movie-card">
          <router-link :to="{ name: 'About', params: { id: filmePopular.id } }">
            <img
              id="image-movie"
              :src="`https://image.tmdb.org/t/p/original/${filmePopular.poster_path}`"
              width="280"
              height="280"
            />
            <i>{{ filmePopular.vote_average }}</i>
            <h1>{{ filmePopular.title }}</h1>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
* {
  list-style: none;
}
.container-filmes-populares {
  margin: 0 auto;
  margin: 10px;
  padding: 5px;
  min-width: 1fr;
}
.filmes-populares {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.card-movie {
  display: block;
  max-width: 300px;
  height: 400px;
  margin: 10px;
  padding: 4px;
  border-radius: 5px;
  box-shadow: 1px 2px 8px rgba(23, 40, 189, 0.589);
}
.informations-movie-card {
  margin-bottom: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.informations-movie-card h1 {
  display: block;
  font-size: 18px;
}
</style>
<script src='./CardMovieScript.js'></script>