<template>
  <header class="parent">
    <div class="container-navbar">
      <nav class="navbar">
        <h2 id="movie-title">{{ movies.original_title }}</h2>
        <img
          src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png"
          alt="icon menu"
          width="35"
          height="35"
        />
      </nav>
    </div>
    <aside class="aside-container">
      <ButtonWatch />
    </aside>
    <div><!----></div>

    <div class="div1">
      <div class="trailer-text-container">
        <h4>TRAILERS</h4>
        <span>🔴🔴🔴</span>
      </div>
    </div>
    <Footer />
    <div class="div1">
      <div class="text-information">
        <h2>{{ movies.original_title }}</h2>
        <h3>OFFICIAL TEASER</h3>
      </div>
      <TeaserContainer :title="movies.original_title" />
    </div>
  </header>
</template>

<script src='@/scripts/about/aboutScript'></script>

<style>
#movie-title {
  color: #ffff;
}
.parent {
  height: 100vh;
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-template-rows: 10vh 10vh;
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  image-rendering: pixelated;
}
.container-navbar {
  display: flex;
  justify-content: center;
}
.navbar {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
}
.navbar img:hover {
  cursor: pointer;
}
.div1 {
  background-color: rgba(27, 25, 25, 0.685);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.aside-container {
  display: flex;
  align-items: center;
  background-color: rgba(27, 25, 25, 0.685);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.text-information {
  width: 229px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 15px;
}
.text-information h2,
h3 {
  color: #ffff;
  font-weight: 500;
}
.trailer-text-container h4 {
  font-size: 14px;
  font-weight: 600;
}
.trailer-text-container {
  margin-top: 15px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.aside {
  position: relative;
  z-index: 1;
}
</style>