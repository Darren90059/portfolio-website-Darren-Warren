import { createRouter, createWebHistory } from 'vue-router';
import About from './views/About.vue';
import Portfolio from './views/Portfolio.vue';
import Home from './views/Home.vue'; 

const routes = [
  { path: '/', name: 'Home', component: Home },  // Default route for Home page
  { path: '/about', name: 'About', component: About },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
