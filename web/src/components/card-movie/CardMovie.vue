<template>
  <section class="filmesPopulares">
    <ul
      class="cardMovie"
      v-for="filmePopular in filmesPopulares"
      :key="filmePopular.id"
    >
      <img
        id="imageFilme"
        :src="`https://image.tmdb.org/t/p/original/${filmePopular.poster_path}`"
        width="280"
        height="280"
      />
      <li class="liCardMovie" type="none">
        <h1 class="titleMovie">{{ filmePopular.title }}</h1>
        <!-- {{ filmePopular.adult }} -->
        {{ filmePopular.popularity }}
        <!-- {{ filmePopular.original_title }} -->
        <!-- {{ filmePopular.overview }} -->
      </li>
      <router-link 
      id="linkToViewCard"
      :to="{ name: 'About', params: { id: filmePopular.id } }"
        >ℹ️</router-link
      >
    </ul>
  </section>
</template>
<style scoped>
#linkToViewCard {
  background: red;
  display: inline;
}
.filmesPopulares {
  grid-area: "filmesPopulares";
  background-color: rgba(7, 7, 7, 0.377);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.cardMovie {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 300px;
  height: 300px;
  margin: 10px;
  padding: 3px;
  border-radius: 4px;
  background: rgba(112, 94, 94, 0.349);
}
.liCardMovie {
  background: rgb(43, 40, 40);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.titleMovie {
  font-size: 18px;
  text-align: justify;
  display: block;
  text-align: center;
  font-weight: 700;
  margin: 2px;
  color: rgba(255, 255, 255, 0.644);
}
#imageFilme {
  width: 200px;
  height: 220px;
  border-radius: 3px;
}
</style>
<script src='./CardMovieScript.js'></script>