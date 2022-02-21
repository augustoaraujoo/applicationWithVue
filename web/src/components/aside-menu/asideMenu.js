import ButtonAsideMenu from "../buttons-aside-menu/ButtonAsideMenu.vue";
import axios from 'axios'
export default {
    components: { ButtonAsideMenu },
    data() {
        return {
            genres: [],
            movieID: ''
        }
    },
    methods: {
        clickButton(val) {
            this.movieID = val
            this.emitter.emit("click-button", this.movieID)
        }
    },

    async mounted() {
        await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e3c3595204a142ec627688c9ea2ad00f&language=en-US').then((response) => {
            const data = response.data
            this.genres = data.genres
        });

    },
}