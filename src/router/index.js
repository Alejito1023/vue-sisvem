import { createRouter, createWebHashHistory } from 'vue-router'

import EditarCategorie from '../components/categories/EditarCategorie.vue';
import NewCategorie from '../components/categories/NewCategorie.vue';
import EditarProduct from '../components/products/EditarProduct';
import NewProduct from '../components/products/NewProduct.vue';
import EditarPayMode from '../components/pay_modes/EditarPayMode.vue';
import NewPayMode from '../components/pay_modes/NewPayMode.vue';
import EditarCustomer from '../components/customers/EditarCustomer.vue';
import NewCustomer from '../components/customers/NewCostumer.vue';
import HomeView from '../views/HomeView.vue'
import Categories from '../views/Categories';
import Products from '../views/Products.vue';
import Customers from '../views/Customers.vue'
import Pay_Modes from '../views/Pay_Modes.vue';



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
    path: '/products',
    name: 'Products',
    component: Products
  },

  {
    path: '/editar-product/id',
    name: 'EditarProduct',
    component : EditarProduct
  },

  {
    path: '/add-product/',
    name: 'NewProduct',
    component: NewProduct
  },

  {
    path: '/pay_modes',
    name: 'PayModes',
    component: Pay_Modes
  },
  {
    path: '/editar-pay_mode/id',
    name: 'EditarPayMode',
    component : EditarPayMode
  },

  {
    path: '/add-pay_mode/',
    name: 'NewPayMode',
    component: NewPayMode
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
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
