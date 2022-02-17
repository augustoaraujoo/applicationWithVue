<template>
  <aside>
    <ul v-for="genre in genres" :key="genre.id">
      <li>
        <ButtonAsideMenu 
          :movieTypeID="genre.id" 
          :movieName="genre.name" 
          />
      </li>
    </ul>
  </aside>
</template>


<style scoped>
aside {
  position: relative;
  margin: 10px;
  padding: 5px;
}

li {
  list-style-type: none;
}
</style>

<script src='./asideMenu.js'></script>