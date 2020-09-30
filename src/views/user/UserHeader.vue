<template>
  <div>
    <nav class="navbar navbar-light justify-content-end" style="background-color: #ffc007;">
      <ul class="nav nav-pills ">
        <router-link to="/profile"
                     tag="li"
                     class="nav-item nav-link "
                     exact>
          <span class="hvr-icon-grow"><i class="fas fa-cogs icon hvr-icon"></i></span>
        </router-link>

        <li class="nav-item nav-link "><span class="hvr-icon-grow"><i class="fas fa-sign-out-alt icon hvr-icon"></i></span></li>
      </ul>
    </nav>
<!--    <b-navbar toggleable="lg" type="light" variant="light" style="background-color: #ffc007;">-->
<!--      <b-navbar-brand class="brand hvr-grow" href="#" >-->
<!--&lt;!&ndash;        <router-link to="/"><img src="../../../public/img/scambay-logo.png" height="75" width="75"/></router-link>&ndash;&gt;-->
<!--      </b-navbar-brand>-->
<!--      &lt;!&ndash; Right aligned nav items &ndash;&gt;-->
<!--      <b-navbar-nav class="ml-auto">-->
<!--        <b-navbar-nav>-->
<!--          <b-nav-item>-->
<!--            <router-link class="icon" to="/sign-in"><span class="hvr-icon-grow"><i class="fas fa-user icon hvr-icon"></i></span></router-link>-->
<!--            <router-link class="icon" to="/shopping-cart"><span class="hvr-icon-grow"><i class="fas fa-shopping-cart hvr-icon"></i></span></router-link>-->
<!--          </b-nav-item>-->
<!--        </b-navbar-nav>-->
<!--      </b-navbar-nav>-->
<!--    </b-navbar>-->
  </div>
</template>

<script>
export default {
  name: 'UserHeader'
}
</script>

<style scoped>

.icon {
  color: black;
  padding: 0 15px;
}

.icon:hover{
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

</style>
