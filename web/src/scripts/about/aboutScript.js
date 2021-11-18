import axios from "axios";
import Footer from '../../components/footer/Footer.vue'
export default {
  data() {
    return {
      casts: "",
      movies: [],
    };
  },
  components: {
    Footer
  },
  async mounted() {
    const { id } = this.$route.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e3c3595204a142ec627688c9ea2ad00f&language=en-US`
    );
    const data = response.data;
    this.casts = data.cast;
  },
  async created() {
    const { id } = this.$route.params;
    const api_key = "e3c3595204a142ec627688c9ea2ad00f";

    const getDetailsMovies = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.movies = data;

        const parent = document.querySelector(".parent");
        parent.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${this.movies.backdrop_path})`;
        return;
      });
    return getDetailsMovies;
  },
  methods: {},
};