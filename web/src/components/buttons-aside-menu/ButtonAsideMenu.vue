<template>
  <div class="container-button">
    <!-- <button type="button" @click="dadosFilhoButton">{{ movieName }}</button> -->
  </div>
</template>

<script>
export default {
  props: {
    movieTypeID: Number,
    movieName: String,
  },
  data() {
    return {
      myPropsMovieName: this.$props.movieName,
    }
  },
  methods: {
    dadosFilhoButton() {
      this.$emit('event-filho-button', this.myPropsMovieName)
    }      
  }
};
</script>

<style scoped>
.container-button {
  width: 100%;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
button {
  cursor: pointer;
  outline: none;
  border: none;
  width: 300px;
  height: 50px;
  border-radius: 5px;
  background: rgb(51, 49, 49);
  color: #ffff;
  font-weight: 500;
}
</style>