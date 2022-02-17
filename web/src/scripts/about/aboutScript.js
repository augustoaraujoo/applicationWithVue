import axios from "axios";
import Footer from '../../components/footer/Footer.vue'
import ButtonWatch from '../../components/button-watch/ButtonWatch.vue'
import TeaserContainer from '../../components/teaser-component/TeaserContainer.vue'
import Aside from '../../components/aside-about/AsideAbout.vue'
import NavInformationAbout from '../../components/nav-information-about/NavInformationAbout.vue'

export default {
  data() {
    return {
      casts: "",
      movies: [],
      api_key : "e3c3595204a142ec627688c9ea2ad00f"
    };
  },
  components: {
    Footer,
    ButtonWatch,
    TeaserContainer,
    Aside,
    NavInformationAbout,
  },
  async mounted() {
    const { id } = this.$route.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.api_key}&language=en-US`
    );
    const data = response.data;
    console.log(data);
    this.casts = data.cast;
  },
  async created() {
    const { id } = this.$route.params;

    const getDetailsMovies = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${this.api_key}&language=en-US`
      )
      .then((response) => {
        const data = response.data;
        this.movies = data;

        const parent = document.querySelector(".parent");
        parent.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${this.movies.backdrop_path})`;
        return;
      });
    return getDetailsMovies;
  },
  methods: {},
};