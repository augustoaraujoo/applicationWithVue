<template>
  <div>
    <button style=" backgroundColor: {{color}} ">{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    color: String,
  },
  computed: {},
  data() {},
};
</script>
<style scoped>
button {
  border: 1px solid #ffff;
  width: 230px;
  height: 40px;
  margin: 3px;
  background: rgb(2, 2, 2);
  color: #ffff;
  font-family: "Poppins", sans-serif, "Roboto";
  font-weight: 500;
}
button:hover {
  cursor: pointer;
}
</style>