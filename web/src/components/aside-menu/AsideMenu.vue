<template>
  <aside>
    <!-- <ul v-for="genre in genres" :key="genre.id">
      <li>
         <ButtonAsideMenu
          :movieTypeID="genre.id"
          :movieName="genre.name"
          @event-filho-button="receberDadosDoFilhoButton"
        /> 
          
            this.genres = data.genres
        
    </li>-->
    <ul>
      <div class="container-button" v-for="genre in genres" :key="genre.id">
        <button type="button" @click="clickButton(genre.id)">{{ genre.name }}</button>
      </div>
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

<script src='./asideMenu.js'></script>