<template>
  <div>
    <app-tech-header></app-tech-header>

    <div class="album py-5 ">
      <h3>Web technologies used:</h3>
      <div class="container content">

        <div class="row">

          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img class="img-fluid rounded mx-auto d-block" src="../../../../public/img/vue-logo.png" height="200"
                   width="200"/>
              <div class="card-body">
                <p class="card-text"><a class="p-link" href="https://vuejs.org/">Vue.js</a></p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">Including <a href="https://github.com/axios/axios">Axios</a>, <a
                    href="https://router.vuejs.org/">Vue Router</a> and
                    <a href="https://vuex.vuejs.org/">Vuex</a>.</small>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 shadow-sm set-height">
              <img class="img-fluid rounded mx-auto d-block" src="../../../../public/img/bootstrap-vue-logo.png"
                   height="200" width="200"/>
              <div class="card-body">
                <p class="card-text"><a href="https://bootstrap-vue.org/">Bootstrap-Vue</a></p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 shadow-sm set-height">
              <img class="img-fluid rounded mx-auto d-block img-height" src="../../../../public/img/bootstrap-logo.png"
                   height="200" width="200"/>
              <div class="card-body">
                <p class="card-text"><a href="https://getbootstrap.com/">Bootstrap</a></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 set-height">
            <div class="card mb-4 shadow-sm set-height">
              <img class="img-fluid rounded mx-auto d-block" src="../../../../public/img/js-logo.png" height="200"
                   width="200"/>
              <div class="card-body">
                <p class="card-text">Javascript ES6</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 shadow-sm set-height">
              <img class="img-fluid rounded mx-auto d-block img-height" src="../../../../public/img/CSS3-logo.png"
                   height="100"
              />
              <div class="card-body">
                <p class="card-text">CSS3</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 shadow-sm set-height">

              <img class="img-fluid rounded mx-auto d-block html-logo" src="../../../../public/img/HTML5-logo.png"
                   height="100"
              />
              <div class="card-body">
                <p class="card-text">HTML5</p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

</template>

<script>

import TechHeader from './TechHeader'

export default {
  name: 'WebTechnologies',
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    appTechHeader: TechHeader
  }
}
</script>

<style scoped>

.set-height {
  height: 300px;
}

.img-height {
  height: 200px;
}

.html-logo {
  padding-top: 15px;
  height: 200px;
}

.content {
  padding: 50px;
}

.card-text {
  text-align: center;
}

.card-body {
  min-height: 98px;
}

</style>
