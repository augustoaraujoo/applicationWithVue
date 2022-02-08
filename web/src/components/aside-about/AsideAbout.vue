<template>
  <aside class="aside-container">
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
        repudiandae sunt fugit cum unde quod ab suscipit amet ad officia
        dolorum, harum exercitationem autem, maiores nemo? Dolorem praesentium
        maxime consectetur!
      </p>
    </div>
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
        repudiandae sunt fugit cum unde quod ab suscipit amet ad officia
        dolorum, harum exercitationem autem, maiores nemo? Dolorem praesentium
        maxime consectetur!
      </p>
    </div>
    <div class="container-buttons-about">

      <ButtonWatch/>
      <ButtonTeaser text="lorem" />
      <ButtonTeaser text="lorem2" colorBtn="#fffc" colorText="#000" />

    </div>
  </aside>
</template>

<script>
import ButtonTeaser from '../button-teaser/ButtonTeaser.vue'
import ButtonWatch from '../button-watch/ButtonWatch.vue'
export default {
  components: {
    ButtonTeaser,
    ButtonWatch
  }
}
</script>
<style scoped>
.aside-container {
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 10px;
  background: rgba(116, 115, 122, 0.8);
}
.container-buttons-about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
div > p {
  padding: 8px;
}
</style>