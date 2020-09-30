<template>
  <div id="app">

    <app-header></app-header>

    <div class="content">
      <transition
        name="slide"
        mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <app-footer class="footer"></app-footer>

  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  mounted () {
    this.$store.dispatch('retrieveCart')
  },
  beforeCreate () {
    this.$store.dispatch('autoLogin')
  },
  created () {
    // this.$store.dispatch('autoLogin')
    this.$store.dispatch('fetchUserData')
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .content {
    min-height: 75vh;
  }

  .footer {
    min-height: 10vh;
  }

  slide-leave-active {
    transition: opacity 0.5s ease;
    opacity: 0;
    animation: slide-out 0.5s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-enter-active {
    animation: slide-in 0.5s ease-out forwards;
  }

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }

</style>
