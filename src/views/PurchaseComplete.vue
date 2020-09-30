<template>

  <div class="content">
    <div class="container">
      <h1 class="page-title">Purchase complete!</h1>
      <br>
      <div class="row">
        <p class="font-weight-bold">Thanks for your purchase. We have received your order and will start to prepare it. Please expect it to arrive
          around about next Christmas.</p>
      </div>
      <br>
      <div class="row font-weight-bold"><p>If you signed in before you made your purchase, you can view a history of your orders with ScamBay.</p></div>
      <br>
      <div class="row"><p class="text-muted">Automatically redirecting you the home page in {{ timerCount }} seconds in the hopes that you'll give us some
        more money. Please click
        <router-link to="/">here</router-link>
        if you are too impatient to wait any longer.
      </p></div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PurchaseComplete',
  mounted () {
    window.scrollTo(0, 0)
  },
  data () {
    return {
      timerCount: 10
    }
  },
  watch: {
    timerCount: {
      handler (value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--
          }, 1000)
        }
        if (value === 0) {
          this.$store.dispatch('checkOutComplete', false)
          return this.$router.push('/')
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
.content {
  margin-top: 50px;
}
.row {
  margin: 0 10px 0 10px;
}

</style>
