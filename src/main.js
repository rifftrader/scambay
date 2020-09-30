import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

// access Firebase database
axios.defaults.baseURL = 'https://scambay-2c490.firebaseio.com'

// set up global route guard prior to app loading - this prevents users from accessing guarded routes by typing in URL bar.
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('localId')
  if (loggedIn === null && to.path === '/sign-in') {
    next()
  } else if (loggedIn !== null && to.path === '/sign-in') {
    next('/profile')
  } else {
    next()
  }
  if (loggedIn === null && to.path === '/sign-up') {
    next()
  } else if (loggedIn !== null && to.path === '/sign-up') {
    next('/profile')
  } else {
    next()
  }
  // if (loggedIn === null && to.path === '/profile') {
  //   next('/sign-in')
  // } else {
  //   next()
  // }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
