<template>
  <div class="teaser-movie-container">
    <div class="card-teaser">
      <i :v-model="title">{{ title }}</i>
    </div>
    <div class="card-movie-container">
    </div>
    <div class="buttons-teaser-container">
      <ButtonTeaser text="WATCH" />
      <ButtonTeaser text="JOIN NOW" :color='white'/>
    </div>
  </div>
</template>

<script>
import ButtonTeaser from "../../components/button-teaser/ButtonTeaser";
export default {
  props: {
    title: String,
  },
  components: {
    ButtonTeaser, 
  },
  data() {},
};
</script>

<style scoped>
.teaser-movie-container {
  width: 100%;
  height: 55vh;
  background: #864c4c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.card-teaser {
  width: 50%;
  background: wheat;
}
.buttons-teaser-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}
</style>