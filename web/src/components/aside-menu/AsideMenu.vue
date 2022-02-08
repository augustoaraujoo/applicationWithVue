<template>
  <aside>
    <ButtonAsideMenu />
    <ButtonAsideMenu />
    <ButtonAsideMenu />
    <ButtonAsideMenu />
    <ButtonAsideMenu />
    <ButtonAsideMenu />
  </aside>
</template>

<script>
import ButtonAsideMenu from "../buttons-aside-menu/ButtonAsideMenu.vue";
export default {
  components: { ButtonAsideMenu },
};
</script>

<style scoped>
aside {
  position:relative ;
  margin: 10px;
  padding: 5px;
}
</style>