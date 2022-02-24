import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Site from "../views/Site.vue";
import Page from "@/views/Page.vue";
import Create from "@/views/Create.vue";
import CreatePage from "@/views/CreatePage.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newsite',
    name: 'Create',
    component: Create
  },
  {
    path: '/newpage',
    name: 'CreatePage',
    component: CreatePage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/site',
    name: 'Site',
    component: Site
  },
  {
    path: '/page',
    name: 'Page',
    component: Page
  }
]

const router = new VueRouter({
  routes
})

export default router
