<template>
  <footer class="container-footer">

    <div class="items-footer">

      <div class="first-item-scrool">
        <div class="item-scrool">
          <strong>Scrool</strong>
          <a href="#"> down</a>
        </div>
      </div>
      
      <div class="second-item-container">
        <div class="social-mídias">
          <a href="#">FACEBOOK</a>
          <a href="#">TWITTER</a>
          <a href="#">INSTAGRAM</a>
          <a href="#">YOUTUBE</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.container-footer {
  display: flex;
  align-items: center;
}
.items-footer {
  display: flex;
  margin: 10px;
}
.first-item-scrool {
  margin-left: 10px;
  width: 300px;
}
.item-scrool {
  display: flex;
  align-items: center;
}

.second-item-container {
  flex: 1;
}
.social-mídias {
  margin-left: 11.1rem;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.social-mídias a {
  font-weight: bold;
}
</style>