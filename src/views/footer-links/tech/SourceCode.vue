<template>
  <div>
    <app-tech-header></app-tech-header>
    <div class="container content">
      <h3 class="positioning">Project source files</h3>
      <p class="text-muted">Hosted by:</p>

      <a href="https://github.com/"><img class="positioning hvr-grow" src="../../../../public/img/github-logo.png" height="120" width="120"/></a>

      <p>If you are curious about implementation of this project, feel free to view the source files <a class="link font-weight-bold" href="https://github.com/rifftrader/scambay">here</a>.</p>

    </div>
  </div>
</template>

<script>
import TechHeader from './TechHeader'

export default {
  name: 'SourceCode',
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    appTechHeader: TechHeader
  }
}
</script>

<style scoped>
  .content {
    padding: 50px;
  }

  .positioning {
    margin-bottom: 50px;
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

  .link {
    color: black;
  }
</style>
