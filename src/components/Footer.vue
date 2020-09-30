<template>

  <!--    <div class="footer">-->

  <!--      <div class="container-fluid ">-->

  <!--        <div class="row">-->
  <!--          <div class="col-sm">-->
  <!--            <router-link class="footer-links" to="/terms-and-conditions">Terms and Conditions</router-link>-->
  <!--            <router-link class="footer-links" to="/customer-service">Customer Service</router-link>-->
  <!--            <router-link class="footer-links" to="/web-technologies">Web Technologies</router-link>-->
  <!--          </div>-->
  <!--          <div class="col-sm brand">-->
  <!--            <img src="../../public/img/scambay-logo.png" height="100" width="100"/></div>-->
  <!--          <div class="col-sm">-->

  <!--          </div>-->
  <!--        </div>-->

  <!--        <div class="row">-->
  <!--          <div class="col-sm">-->

  <!--          </div>-->
  <!--          <div class="col-sm">-->
  <!--            Rig Pig Enterprises ©-->
  <!--          </div>-->
  <!--          <div class="col-sm">-->

  <!--          </div>-->
  <!--        </div>-->

  <!--      </div>-->

  <!--    </div>-->

  <footer class="container-fluid">
    <div class="row">
      <div class="col-12 col-md">

        <router-link to="/"><img src="../../public/img/scambay-logo.png" class="hvr-grow" height="100" width="100"/>
        </router-link>
        <small class="d-block mb-3 text-muted">&copy; 2020</small>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <router-link to="/about/privacy" class="text-muted router-link">Privacy</router-link>
          <router-link to="/about/terms-and-conditions" class="text-muted">Terms</router-link>

        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Contact</h5>
        <router-link to="/contact/customer-service" class="text-muted router-link">Customer Service</router-link>
      </div>
      <div class="col-6 col-md">
        <h5>Tech</h5>
        <router-link to="/tech/web-technologies" class="text-muted router-link">Stack</router-link>
        <router-link to="/tech/source-code" class="text-muted router-link">Source Code</router-link>
      </div>

    </div>
    <div class="row footer-footer">
      <div class="col col-md">

        <small class="d-block mb-3 text-muted">Web design by Rig Pig Enterprises ©</small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

.container-fluid {
  padding-top: 16px;
}

.footer {
  background-color: #f8f9fa;
}

.footer-links {
  color: black;
  text-align: left;
  display: block;
  padding: 2.5px 0;
  /*text-decoration: none;*/
}

.footer-footer {
  padding-top: 10px;
}

.router-link {
  display: block;
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
