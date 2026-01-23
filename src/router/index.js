import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import About from '../views/About.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/about/:id',
        name: 'About',
        component: About
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
