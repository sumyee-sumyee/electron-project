import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/pages/index').default
    },
    {
      path: '*',
      redirect: '/'
    },
    // {
    //   path: '/showData',
    //   component: require('@/components/LandingPage/Outdoor/ShowData.vue').default
    // },
    // {
    //   path: '/ShowSystemData',
    //   component: require('@/components/LandingPage/Outdoor/ShowSystemData.vue').default
    // },
    // {
    //   path: '/InRotate',
    //   component: require('@/components/LandingPage/Indoor/InRotate.vue').default
    // }
  ]
})
