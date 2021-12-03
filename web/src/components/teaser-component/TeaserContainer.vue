<template>
  <div class="teaser-movie-container">
    <div class="card-teaser">
      <div>
        <i :v-model="title">{{ title }}</i>
      </div>
      <div class="video-movie"></div>
    </div>
    <div class="buttons-teaser-container">
      <ButtonTeaser text="WATCH" colorBtn="#ffff" colorText="#020202" />
      <ButtonTeaser text="JOIN NOW" />
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.card-teaser {
  margin-top: 2px;
  width: 50%;
  height: 40vh;
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