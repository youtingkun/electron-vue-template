import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const LandingPage = () => import('@/components/LandingPage')
const HomePage = () => import('@/components/home')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/home',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
