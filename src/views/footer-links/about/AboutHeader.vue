<template>
  <div class="container-fluid">

    <ul class="nav nav-pills">
      <router-link to="/about/privacy"
                   tag="li"
                   class="nav-item nav-link "
                   exact>
        <a>Privacy</a>
      </router-link>
      <router-link to="/about/terms-and-conditions"
                   tag="li"
                   class="nav-item nav-link "
                   exact>
        <a>Terms and Conditions</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutHeader'
}
</script>

<style scoped>
  div {
    background-color: #ffc007;
  }

  a {
    color: black;
  }

</style>
