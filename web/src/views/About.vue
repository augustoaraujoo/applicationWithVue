<template>
  <div class="template">
    <div class="container">
      <div class="grid div-container">
        <header class="header-container">
          <div class="header-infos">
            <h2 id="movie-title">{{ movies.original_title }}</h2>
            <img
              src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png"
              alt="icon menu"
              width="35"
              height="35"
            />
          </div>
        </header>

        <nav class="nav-container">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto modi odio
            </p>
          </div>
        </nav>
      </div>
    </div>
    <main class="grid main-container">
      <div class="parent background-image"></div>
      <Aside/>
    </main>

    <footer class="grid container-footer">
      <Footer/>
    </footer>
  </div>
</template>

<script src='../scripts/about/aboutScript'>
</script>

<style>

.template {
  width: 100%;
  height: 100%;
}
.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.container {
  height: 60px;
}
.header-container {
}
.header-infos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
}
.nav-container {
}
.main-container {
  height: 80vh;
}
.container-footer {
  position: fixed;
  bottom: 0;
}
.background-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  image-rendering: pixelated;
}
</style>