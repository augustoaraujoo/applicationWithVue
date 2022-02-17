import axios from "axios";
export default {
  name: "Home",
  props: {
    api_key: String
  },
  data() {
    return {
      filmesPopulares: [],
      
    };
  },
  async mounted() {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&page=1`
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.filmesPopulares = data.results;
      });

  },
  methods: {

  }
};