import axios from "axios";

export default {
  name: "Home",
  props: {
    api_key: String,
  },
  data() {
    return {
      filmesPopulares: [],
      valueEmitter: '',
    };
  },
  computed: {
    valueEmitter() {
      return this.valueEmitter;
    }
  },

  async mounted() {

    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&page=1`)
      .then((response) => {
        const data = response.data.results;
        this.filmesPopulares = data;

        this.emitter.on("click-button", (val) => {
          this.valueEmitter = val

          const newArrayFiltered = data.map((data) => {

            const testGenreId = data.genre_ids.includes(this.valueEmitter)
            
            if(testGenreId) {
              this.filmesPopulares = testGenreId
            }
            return testGenreId;

          })
          return newArrayFiltered

        })

      });
  },
};