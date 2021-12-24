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
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
        repudiandae sunt fugit cum unde quod ab suscipit amet ad officia
        dolorum, harum exercitationem autem, maiores nemo? Dolorem praesentium
        maxime consectetur!
      </p>
    </div>
  </aside>
</template>


<style scoped>
.aside-container {
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 10px;
  background: #ee2;
}
div > p {
  background: red;
}
</style>