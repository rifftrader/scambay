import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [

  // HOME ------------------|

  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // HEADER NAVIGATION ------------------|

  {
    path: '/sign-in',
    name: 'Sign In',
    component: () => import('../views/user/Signin')

  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: () => import('../views/user/Signup')

  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/user/Profile')

  },

  {
    path: '/shopping-cart',
    name: 'Shopping Cart',
    component: () => import('../views/ShoppingCart')
  },

  {
    path: '/check-out',
    name: 'Checkout',
    component: () => import('../views/CheckOut'),
    beforeEnter: (to, from, next) => {
      if (store.getters.checkOutEnable) {
        next()
      } else {
        next('/shopping-cart')
      }
    }
  },

  {
    path: '/purchase-complete',
    name: 'Purchase Complete',
    component: () => import('../views/PurchaseComplete'),
    beforeEnter: (to, from, next) => {
      if (store.getters.checkOutComplete) {
        next()
      } else {
        next('/shopping-cart')
      }
    }
  },

  // FOOTER NAVIGATION ------------------|

  // About Section
  {
    path: '/about/terms-and-conditions',
    name: 'Terms and Conditions',
    component: () => import('../views/footer-links/about/TermsAndConditions')
  },
  {
    path: '/about/privacy',
    name: 'Privacy',
    component: () => import('../views/footer-links/about/Privacy')
  },

  // Contact Us Section
  {
    path: '/contact/customer-service',
    name: 'Customer Service',
    component: () => import('../views/footer-links/contact/CustomerService')
  },

  // Tech Section
  {
    path: '/tech/web-technologies',
    name: 'Web Technologies',
    component: () => import('../views/footer-links/tech/WebTechnologies')
  },
  {
    path: '/tech/source-code',
    name: 'Source Code',
    component: () => import('../views/footer-links/tech/SourceCode')
  },

  { path: '*', redirect: '/' }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
