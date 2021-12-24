<template>
  <main>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste blanditiis tempore perspiciatis temporibus est voluptatem possimus quaerat sequi explicabo, non aliquid qui eum similique laudantium eaque! Fuga modi obcaecati nesciunt.
    </div>
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