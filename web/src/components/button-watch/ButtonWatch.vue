<template>
  <div class="aside-buttom">
    <button>WATCH</button>
  </div>
</template>

<script>
export default {
  data() {},
};
</script>
<style scoped>
button {
  border: 1px solid #ffff;
  width: 130px;
  height: 40px;
  background: rgb(2, 2, 2);
  color: #ffff;
  font-family: "Poppins", sans-serif, "Roboto";
  font-weight: 500;
}
button:hover {
  cursor: pointer;
}
.aside-buttom {
  width: 350px;
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  padding: 10px;
}
</style>