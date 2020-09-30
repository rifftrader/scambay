<template>
  <div class="container-fluid">

    <ul class="nav nav-pills">
      <router-link to="/tech/web-technologies"
                   tag="li"
                   class="nav-item nav-link "
                   exact>
        <a>Tech Stack</a>
      </router-link>
      <router-link to="/tech/source-code"
                   tag="li"
                   class="nav-item nav-link "
                   exact>
        <a>Source Code</a>
      </router-link>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'TechHeader'
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
