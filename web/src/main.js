import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import router from './router'
import store from './store'

const emitter = mitt()
const app = createApp(App).use(router).use(store)

app.config.globalProperties.emitter = emitter
app.mount('#app')