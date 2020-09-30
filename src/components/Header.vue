<template>

  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand class="brand hvr-grow" href="#">
        <router-link to="/"><img src="../../public/img/scambay-logo.png" height="75" width="75"/></router-link>
      </b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="icon" to="/sign-in" v-if="!isLoggedIn"><span class="hvr-icon-grow"><i
              class="fas fa-user icon hvr-icon"></i></span></router-link>
            <router-link class="icon" to="/profile" v-else><span class="hvr-icon-grow"><i
              class="fas fa-cogs icon hvr-icon"></i></span></router-link>
            <router-link class="icon" to="/shopping-cart"><span class="hvr-icon-grow"><i
              class="fas fa-shopping-cart hvr-icon"></i></span><span
              class="badge badge-pill badge-warning">{{ cartLength }}</span></router-link>
            <a class="icon" v-if="isLoggedIn" @click="logOut"><span class="hvr-icon-grow"><i
              class="fas fa-sign-out-alt icon hvr-icon"></i></span></a>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-navbar>
    <div class="navbar justify-content-md-start user-details" v-if="isLoggedIn">
      <ul class="nav nav-pills">
        <li class="nav-item nav-link user-details font-weight-bold">Welcome, {{ fName }}!</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Header',
  methods: {
    logOut () {
      this.$store.dispatch('logout', true)
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    },
    addedToCart () {
      return this.$store.getters.addedToCart
    },
    cartLength () {
      let sum = 0
      this.addedToCart.forEach(e => {
        sum += e[1]
      })
      return sum > 0 ? `${sum}` : null
    },
    fName () {
      return this.$store.getters.getUserDetails.name
    }
  }
}
</script>

<style scoped>

.brand {
  font-family: 'Titillium Web', sans-serif;
  font-size: 1.5rem;
}

.icon {
  color: black;
  padding: 0 15px;
}

.icon:hover {
  text-decoration: none;
}

.hvr-icon-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}

.hvr-icon-grow .hvr-icon {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.hvr-icon-grow:hover .hvr-icon, .hvr-icon-grow:focus .hvr-icon, .hvr-icon-grow:active .hvr-icon {
  -webkit-transform: scale(1.3) translateZ(0);
  transform: scale(1.3) translateZ(0);
}

.user-details {
  padding: 0 16px;
  color: white;
  background-color: #3399d9;
}

</style>
