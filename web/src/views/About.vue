<template>
  <header class="parent">
    <div class="container-navbar">
      <nav class="navbar">
        <h2>{{ movies.original_title }}</h2>
        <a href="#">👩‍👩‍👧‍👦</a>
      </nav>
    </div>
    <aside class="aside-container">
      <div class="aside-buttom">
        <button>WATCH</button>
      </div>
    </aside>
    <div>c</div>
    
    <div class="aside">d</div>
    <div class="div1">a</div>
    <div class="aside">d</div>
    <Footer />
    <div class="aside"></div>
  </header>
</template>

<script src='@/scripts/about/aboutScript'></script>

<style>
.parent {
  height: 100vh;
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-template-rows: 10vh 10vh;
  gap: 2px;
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
  background: rgba(255, 0, 0, 0.158);
}

.div2 {
  background: rgba(87, 75, 75, 0.699);
}

.div3 {
  background: rgba(221, 8, 8, 0.911);
}

.div4 {
  background: rgba(223, 190, 190, 0.295);
}
.aside-container {
  background: gray;
  display: flex;
  align-items: center;
}
.aside-buttom {
  width: 350px;
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  padding: 10px;
}
button {
  border: 1px solid #ffff;
  width: 130px;
  height: 40px;
  background: rgb(2, 2, 2);
  color: #ffff;
  font-family: "Poppins", sans-serif, "Roboto";
  font-weight: 500;
}
button:hover {
  cursor: pointer;
}
.aside {
  background: rgba(220, 220, 220, 0.377);
  position: relative;
  z-index: 1;
}
</style>