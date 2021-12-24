const array = [1, 2, 3, 4, 5]

const Func = (array) => {
    return [Math.max(...array), Math.min(...array)]
}
console.log(Func(array))



/*
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
*/