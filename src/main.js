import { createApp } from 'vue'
import App from './App.vue'
import Main from './Main.vue'
import Error404 from './Error404.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/', component: Main},
    {path: '/error', component: Error404},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


createApp(App).use(router).mount('#app')
