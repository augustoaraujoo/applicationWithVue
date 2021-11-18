<template>
  <footer class="container-footer">
    <div class="items">
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

<script>
export default {};
</script>

<style>
.container-footer {
  display: flex;
  flex: 1;
  align-items: flex-end;
}
.items {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
}
.second-item-container {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.social-mídias {
  flex: 1;
  display: flex;
  justify-content: space-around;
}
</style>