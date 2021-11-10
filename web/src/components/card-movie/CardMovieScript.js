import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      filmesPopulares: [],
    };
  },
  async mounted() {
    const api_key = "e3c3595204a142ec627688c9ea2ad00f";
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
      )
      .then((response) => {
        response.data;
        this.filmesPopulares = response.data.results;
      });
  },
  methods:{
  }
};