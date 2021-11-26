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
          <i class="popularityMovie">{{ filmePopular.vote_average }}</i>
          <h1 class="titleMovie">{{ filmePopular.title }}</h1>
          <!-- {{ filmePopular.adult }} -->
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
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  flex: 1;
  border-radius:10px;
  position: relative;
  top: -35px;
  z-index: 1;
  background: rgba(32, 32, 28, 0.61);
  color:#ffff;
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
  display: block;
  padding: 1px;
}
.containerInfos {
  margin: 0 auto;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.titleMovie {
  font-size: 15px;
  display: inline;
  text-align: center;
  font-weight: 700;
  color: rgb(255, 255, 255);
}
#imageFilme {
  width: 200px;
  height: 220px;
  border-radius: 3px;
}
</style>
<script src='./CardMovieScript.js'></script>