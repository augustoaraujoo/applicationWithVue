<template>
  <div>person {{ $route.params.idPerson }}</div>
</template>

<script >
import axios from "axios";
export default {
  data() {
    return {
       api_key : "e3c3595204a142ec627688c9ea2ad00f"
    };
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/credit/5c5b3ebfc3a3683cc6885550?api_key=${this.api_key}`
      )
      .then((response) => {
        console.log(response);
      });
  },
};
</script>

<style scoped>
</style>