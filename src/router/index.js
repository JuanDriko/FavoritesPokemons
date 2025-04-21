import { createRouter, createWebHistory  } from 'vue-router';
import Home from '../views/Home.vue';
import Pokedex from '../views/Pokedex.vue';

const router = createRouter({
  history: createWebHistory (),
  routes: [
    {
      path: '/FavoritesPokemons',
      name: 'home',
      component: Home,
    },
    {
      path: '/pokedex',
      name: 'Pokedex',
      component: Pokedex,
    },
  ],
});

export default router;