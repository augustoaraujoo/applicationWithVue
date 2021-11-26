<template>
  <header class="parent">
    <div class="container-navbar">
      <nav class="navbar">
        <h2 id="movie-title">{{ movies.original_title }}</h2>
        <a href="#">👩‍👩‍👧‍👦</a>
      </nav>
    </div>
    <aside class="aside-container">
      <ButtonWatch />
    </aside>
    <div>a</div>

    <div class="div1"><h4>TRAILERS</h4></div>
    <Footer />
    <div class="div1">
      <div>
        <h2>{{ movies.original_title }}</h2>
        <i>OFFICIAL TEASER</i>
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

.div1 {
  background: #808080;
}

.aside-container {
  background: #808080;
  opacity: 0.7;
  display: flex;
  align-items: center;
}
.aside {
  background: rgba(220, 220, 220, 0.377);
  position: relative;
  z-index: 1;
}
</style>