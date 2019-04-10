import Vue from 'vue';
import Router from 'vue-router';

// import Home from 'pages/home'
// import Cart from 'pages/cart'
// import Category from 'pages/category'
// import Personal from 'pages/personal'
// import Product from 'pages/product'
// import Search from 'pages/search'

Vue.use(Router);
const routes = [{
  path: '/home',
  name: 'Home',
  component: () => import('pages/home'),
  children: [{
    path: 'product/:id',
    name: 'Home-Product',
    component: () => import('pages/product')
  }]
}, {
  path: '/cart',
  name: 'Cart',
  component: () => import('pages/cart')
}, {
  path: '/category',
  name: 'Category',
  component: () => import('pages/category')
}, {
  path: '/personal',
  name: 'Personal',
  component: () => import('pages/personal')
}, {
  path: '/search',
  name: 'Search',
  component: () => import('pages/search')
}, {
  // 兼容性的处理
  path: '*',
  redirect: '/home'
}]
export default new Router({
  routes
});
