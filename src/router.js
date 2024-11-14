import { createRouter, createWebHistory } from 'vue-router';
import About from './views/About.vue';  // Ensure the path is correct
import Portfolio from './views/Portfolio.vue';  // Ensure the path is correct
import Home from './views/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },  // '/about' for the About page
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },  // '/portfolio' for the Portfolio page
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
