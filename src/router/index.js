import { createRouter, createWebHashHistory } from 'vue-router'

import EditarCategorie from '../components/categories/EditarCategorie.vue';
import NewCategorie from '../components/categories/NewCategorie.vue';
import HomeView from '../views/HomeView.vue'
import Categories from '../views/Categories';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },

  {
    path: '/editar-categorie/id',
    name: 'EditarCategorie',
    component : EditarCategorie
  },

  {
    path: '/add-categorie/',
    name: 'NewCategorie',
    component: NewCategorie
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
