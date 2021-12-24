<template>
  <div class="teaser-movie-container">
    <div class="card-teaser">
      <div class="video-movie">
        <iframe
          src="https://www.youtube.com/embed/wPosLpgMtTY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="buttons-teaser-container">
      <ButtonTeaser text="WATCH" colorBtn="#ffff" colorText="#020202" />
      <ButtonTeaser text="JOIN NOW" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ButtonTeaser from "../../components/button-teaser/ButtonTeaser";
export default {
  props: {
    title: String,
  },
  components: {
    ButtonTeaser,
  },
  data() {
    return {
      api_key: "e3c3595204a142ec627688c9ea2ad00f",
    };
  },
  mounted() {
    const { id } = this.$route.params;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.api_key}&language=en-US`
      )
      .then((response) => {
        const data = response.data;
        console.log(data.results.name);
      });
  },
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
  width: 300px;
  height: 300px;
  margin-bottom: 5px;
}
.buttons-teaser-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.video-movie iframe {
  width: auto;
  height: 250px;
}
</style>