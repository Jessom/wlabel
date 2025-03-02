import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { router } from "./router"
import 'ant-design-vue/dist/reset.css'

const store = createPinia()
const app = createApp(App)

app.use(Antd)
   .use(router)
   .use(store)
   .mount('#app')
