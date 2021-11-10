<template>
  <main >
    <aside class="asideBar">
      <h1>Popular</h1>
    </aside>
    <CardMovie />
  </main>
</template>

<script>
import CardMovie from "../components/card-movie/CardMovie.vue";
export default {
  name: "Home",
  components: {
    CardMovie,
  },
};
</script>

<style >
main {
  display: grid;
  grid-template-areas: "asideBar  filmesPopulares";
  grid-template-columns: 370px 1fr;
  grid-template-rows: 1fr;
  gap: 1px;
  height: auto;
}
.asideBar {
  grid-area: "asideBar";
  background-color: rgba(7, 7, 7, 0.377);
  display: flex;
  justify-content: center;
}
</style>