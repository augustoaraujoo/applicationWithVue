<template>
  <div class="teaser-movie-container">
    <div class="card-teaser">
      <i :v-model="title">{{title}}</i>
    </div>
  </div>
</template>

<script>
export default {
   props:{
       title:String
   },
    data() {

    }

};
</script>

<style scoped>
.teaser-movie-container {
    width: 100%;
    height: 50vh;
    background: #864c4c;
}
.card-teaser {
    width: 50%;
    background: wheat;
}
</style>