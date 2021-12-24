<template>
  <div>
    <button :style="{ backgroundColor: colorBtn, color: colorText }">
      {{ text }}
    </button>
  </div>
</template>

<script>

export default {
  props: {
    text: String,
    colorBtn: String,
    colorText: String,
  },
  computed: {},
  data() {
    return {
    }
  },

  mounted() {
  },
};
</script>
<style scoped>
button {
  border: 1px solid #ffff;
  width: 300px;
  height: 40px;
  margin: 3px;
  background: #020202;
  color: #ffff;
  font-family: "Poppins", sans-serif, "Roboto";
  font-weight: 500;
}
button:hover {
  cursor: pointer;
}
</style>