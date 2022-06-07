import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/views/Login.vue'
import Register from '/src/views/Register.vue'
import Articles from '/src/views/Articles.vue'
import Poster from '/src/views/Poster.vue'
import App from '/src/App.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/',
            name: 'Articles',
            component: Articles
        },
        {
            path: '/poster',
            name: 'Poster',
            component: Poster
        },
    ]
})

export default router