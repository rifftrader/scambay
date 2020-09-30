<template>
  <div class="container container-fluid content">
    <form class="form-signin container col-lg-4">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="text-muted">Email</label>
      <input type="email" id="inputEmail" class="form-control hvr-grow" v-model="email" autofocus>
      <label for="inputPassword" class="text-muted">Password</label>
      <input type="password" id="inputPassword" class="form-control hvr-grow" v-model="password">
      <div class="checkbox mb-3">
      </div>
      <button class="btn btn-lg btn-warning btn-block" type="submit" @click.prevent="signIn">Sign in</button>
      <p class="mt-5 mb-3 text-muted">Don't have an account? Sign up
        <router-link to="/sign-up">here</router-link>.
      </p>
    </form>
    <div class="alert alert-danger" role="alert" v-if="showErrorMessage">
      There's been a problem logging you in. Please check your email address and password again.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  mounted () {
    window.scrollTo(0, 0)
  },
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    signIn () {
      if (this.email !== null && this.password !== null) {
        const formData = {
          email: this.email,
          password: this.password,
          route: '/sign-in'
        }
        this.$store.dispatch('signIn', formData)
      }
    }
  },
  computed: {
    showErrorMessage () {
      return this.$store.getters.loginError
    }
  }
}
</script>

<style scoped>
  .content {
    padding: 50px;
  }

  .form-control {
    margin: 10px 0;
  }

  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }

  .hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
