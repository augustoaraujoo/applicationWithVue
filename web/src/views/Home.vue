<template>
  <main>
    <Aside />
    <CardMovie />
  </main>
</template>

<script>
import Aside from "../components/aside/Aside.vue";
import CardMovie from "../components/card-movie/CardMovie.vue";
export default {
  name: "Home",
  components: {
    CardMovie,
    Aside,
  },
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-areas: "asideBar  filmesPopulares";
  grid-template-columns: 370px 1fr;
  grid-template-rows: 1fr;
  gap: 1px;
  height: auto;
}
</style>