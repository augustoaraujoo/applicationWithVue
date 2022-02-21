<template>
  <main>
    <AsideMenu />
    <CardMovie api_key="e3c3595204a142ec627688c9ea2ad00f"/>
  </main>
</template>
<!--typeMovieCategory-->
<script>
import AsideMenu from "../components/aside-menu/AsideMenu.vue";
import CardMovie from "../components/card-movie/CardMovie.vue";
export default {
  name: "Home",
  components: {
    CardMovie,
    AsideMenu,
  },
  data(){
    }
};

</script>

<style scoped>
main {
  display: grid;
  grid-template-areas: "asideBar  filmesPopulares";
  grid-template-columns: 370px 1fr;
  gap: 1px;
  background: rgb(243, 241, 241);
}
</style>