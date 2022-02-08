<template>
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

      <NavInformationAbout />
    </div>
  </div>
  <main class="grid main-container">
    <div class="parent background-image"></div>
    <Aside />
  </main>

  <footer class="grid container-footer">
    <Footer />
  </footer>
  
</template>

<script src='../scripts/about/aboutScript'>
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 400px;
}
.container {
  height: 4.5rem;
}
.header-container {
}
.header-infos {
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
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