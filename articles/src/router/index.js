import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/Article/ArticleView.vue'
import NewArticleView from '../views/Article/NewArticle.vue'
import LoginView from '../views/Auth/LoginView.vue'
import RegisterView from '../views/Auth/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/article/:slug',
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
    path:'/profile',
    name:'profile',
    component:ProfileView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
