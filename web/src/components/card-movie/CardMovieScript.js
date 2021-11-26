import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      filmesPopulares: [],
      api_key : "e3c3595204a142ec627688c9ea2ad00f"
    };
  },
  async mounted() {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&page=1`
      )
      .then((response) => {
        const data = response.data;
        this.filmesPopulares = data.results;
      });

  },
  methods: {
  }
};