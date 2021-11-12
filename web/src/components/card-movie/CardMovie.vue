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
        <div class="containerInfos">
          <h1 class="titleMovie">{{ filmePopular.title }}</h1>
          <!-- {{ filmePopular.adult }} -->
          <i class="popularityMovie">{{ filmePopular.vote_average }}</i>
          <!-- {{ filmePopular.original_title }} -->
          <!-- {{ filmePopular.overview }} -->
        </div>
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
  display: inline;
}
.popularityMovie {
  color: #f5f5f5ea;
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
  justify-content: space-between;
  flex-direction: column;
  width: 300px;
  height: 310px;
  margin: 10px;
  padding: 3px;
  border-radius: 4px;
  background: rgba(112, 94, 94, 0.349);
}
.liCardMovie {
  background: rgb(102, 79, 79);
  display:block;
  padding: 1px;
  margin-top:5px;
}
.containerInfos {
  margin: 0 auto;
  width: 190px;
  display: flex;
  flex-direction: column;
  background: yellow;
}
.popularityMovie {
  background: rgba(255, 0, 0, 0.329);
}
.titleMovie {
  background: yellowgreen;
  font-size: 15px;
  display: block;
  text-align: left;
  font-weight: 700;
  margin: 2px;
  color: rgb(255, 255, 255);
}
#imageFilme {
  width: 200px;
  height: 220px;
  border-radius: 3px;
}
</style>
<script src='./CardMovieScript.js'></script>