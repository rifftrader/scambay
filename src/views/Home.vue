<template>

  <div class="content">
    <img src="../../public/img/scambay-logo.png" alt="scambay logo">
    <h2>It's a steal!</h2>
    <br>
    <div class="container">
      <!--    SEARCH BAR -->
      <div class="container-fluid search-box hvr-grow">
        <div class="input-group input-group">
          <input type="text" class="form-control" aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-lg" placeholder="Search for products..." v-model="search">
        </div>
      </div>
<!--      SHOW IF NO RESULTS-->
      <transition name="slide" mode="out-in">
      <div class="container-fluid" v-if="filteredList.length === 0">
        <h5 class="card-title">No results found. Please revise your search.</h5>
      </div>
      </transition>
      <br>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <div class="card-deck col mb-4" v-for="(e) in filteredList" :key="e.invId">
          <!--          MODAL -->
          <b-modal :id="e.invId" title="Item Details" hide-footer>
            <div class="container-fluid">
              <div class="row">
                <img class="img-fluid img-thumbnail"
                     :src="e.imageURL"
                     alt="">
              </div>
              <h5 class="modal-title">{{ e.productName }}</h5>
              <p class="text-muted"> by {{ e.brand }}</p>
              <p class="card-text">{{ e.description }}</p>
              <p class="text-muted">Sold by {{ e.seller }}</p>
              <p class="text-muted">Seller Trust Rating: {{ e.sellerTrustRating }}</p>
              <br>
              <h6 class="modal-title">$ {{ e.cost }} each</h6>
              <br>
              <div class="row">
                <button class="btn btn-warning" @click="addToCart(e.invId)">Add to Cart</button>
              </div>
            </div>
          </b-modal>

          <!--          PRODUCT CARD GROUP -->
          <div class="card">
            <div class="click-area hvr-grow" v-b-modal.modal-tall="e.invId">
              <img :src="e.imageURL" loading="lazy" class="product-img card-img-top img-fluid" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ e.productName }}</h5>
                <p class="card-text product-name">by {{ e.brand }}</p>
                <p class="text-muted card-text product-description">{{ e.description.slice(0, 90) + '...' }}</p>
                <h5 class="card-title">{{ e.currency }} {{ e.cost }}</h5>
              </div>
            </div>
            <button class="btn btn-warning add-to-cart" @click="addToCart(e.invId)">Add to Cart</button>
            <div class="card-footer">
              <small class="text-muted footer-text product-seller">Sold by {{ e.seller }}</small>
              <small class="text-muted footer-text product-trust">Trust rating {{ e.sellerTrustRating }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <go-top></go-top>
  </div>

</template>

<script>

import GoTop from '@inotom/vue-go-top'

export default {
  name: 'Home',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    addToCart (invId) {
      this.$store.dispatch('addToCart', invId)
    }
  },
  computed: {
    forSale () {
      return this.$store.getters.forSale
    },
    addedToCart () {
      return this.$store.getters.addedToCart
    },
    filteredList () {
      return this.$store.getters.forSale.filter(e => {
        return (e.productName.toLowerCase().includes(this.search.toLowerCase())) || (e.description.toLowerCase().includes(this.search.toLowerCase()))
      })
    }
  },
  components: {
    GoTop
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}

</script>

<style>

.add-to-cart {
  margin: 0 10px 10px 10px;
}

.click-area {
  cursor: pointer;
  outline: none;
}

.card-title {
  min-height: 48px;
}

.card-text {
  text-align: left;
  font-size: 0.8rem;
}

.card-footer {
  min-height: 81px;
}

.content {
  padding-bottom: 50px;
}

.footer-text {
  display: block;
  font-size: 0.6rem;
}

.modal-title {
  margin-top: 16px;
}

.product-img {
  min-height: 200px;
  max-height: 200px;
  object-fit: cover;
}

.product-name {
  min-height: 38px;
  text-align: center;
}

.product-description {
  min-height: 95px;
}

.product-seller {
  min-height: 52px;
}

.row {
  justify-content: center;
}

.search-box {
  margin-bottom: 30px;
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
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave-active {
  animation: slide-out 0.2s ease-out forwards;
  transition: opacity 0.2s;
  opacity: 0;
  position: absolute;
  display: none;
}
.slide-move {
  transition: transform 0.5s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
