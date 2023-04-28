import { createApp } from 'vue'
import App from './App.vue'
// Links to what's being exported from the HelloAPI.js file in services
import HelloAPI from '@/services/HelloAPI'

let app = createApp(App)

app.config.globalProperties.$hello_api = HelloAPI

app.mount('#app')
