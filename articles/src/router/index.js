import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import ArticleView from '../views/ArticleView.vue'
import NewArticleView from '../views/NewArticle.vue'
import LoginView from '../views/Auth/LoginView.vue'
import RegisterView from '../views/Auth/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/articles',
    name:'articles',
    component:ArticlesView
  },
  {
    path:'/article/:id',
    name:'article',
    component:ArticleView
  },
  {
    path:'/new-article',
    name:'ne-article',
    component:NewArticleView
  },
  {
    path:'/login',
    name:'login',
    component:LoginView
  },
  {
    path:'/register',
    name:'register',
    component:RegisterView
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
