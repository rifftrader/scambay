<template>
  <div class="content">
    <h1 class="page-title">Shopping Cart</h1>
    <br>
    <br>
    <!--    SHOW IF NOTHING IN CART-->
    <transition name="slide" mode="out-in">
      <div class="container-fluid" v-if="showCartContents.length === 0">
        <h5 class="card-title">Nothing added to shopping cart yet. Go shopping!</h5>
      </div>
    </transition>
    <!-- CART CONTENTS -->
    <transition-group name="slide">
      <div class="container border-bottom" v-for="(e) in showCartContents" :key="e.invId">
        <div class="row align-items-center">
          <div class="col-2 img-div">
            <img class="img-fluid img-thumbnail"
                 :src="e.imageURL"
                 alt="">
          </div>
          <div class="col-10">
            <div class="row align-items-start">
              <div class="col font-weight-bold">
                <p class="text-left product-title product-details">{{ e.productName }}</p>
              </div>
              <div class="col-2 text-right product-title product-details"><span class="hvr-icon-grow"><i
                class="fas fa-trash-alt trash hvr-icon" @click="deleteFromCart(e.invId)"></i></span></div>
            </div>
            <div class="row align-items-center">
              <div class="col">
                <p class="text-left product-details"><small class="text-muted">by</small> {{ e.brand }}</p>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col">
                <p class="text-left"><small class="text-muted">price each</small> ${{ e.cost }}</p>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="text-left col-5 col-sm-4 col-md-3 col-lg-2">
                <div class="input-group input-group-sm">
                  <div class="input-group-prepend hvr-icon">
                    <button class="input-group-text" @click="addToCart(e.invId)"><i class="fas fa-plus"></i></button>
                  </div>
                  <input type="text" class="form-control" aria-label="Quantity" :placeholder="e.quantity" readonly>
                  <div class="input-group-append">
                    <button class="btn input-group-text" @click="removeFromCart(e.invId)"><i class="fas fa-minus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col"></div>
            </div>
            <div class="row justify-content-end align-items-end">
              <div class="col col-5 col-sm-4 col-md-3 col-lg-2 text-right">
                <p class="product-details product-title"><small class="text-muted">subtotal</small></p>
              </div>
              <div class="col col-7 col-sm-6 col-md-5 col-lg-4 product-title text-right">$
                {{ e.subTotal }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
    <!--GRAND TOTAL AND CHECKOUT-->
    <div class="container grand-total" v-if="showCartContents.length > 0">
      <div class="row align-items-center">
        <div class="col-2 img-div"></div>
        <div class="col-10">
          <div class="row justify-content-end align-items-end">
            <div class="col col-5 col-sm-4 col-md-3 col-lg-2 text-right">
              <p class="product-details product-title"><small class="text-muted">total</small></p>
            </div>
            <div class="col col-7 col-sm-6 col-md-5 col-lg-4 product-title text-right">$
              {{ totalPrice }}
            </div>
          </div>
          <div class="row justify-content-end align-items-end">
            <div class="col col-5 col-sm-4 col-md-3 col-lg-2 text-right">
              <p class="product-details product-title"><small class="text-muted">(inc. sales tax)</small></p>
            </div>
            <div class="col col-7 col-sm-6 col-md-5 col-lg-4 product-title text-right">(15%)
            </div>
          </div>
          <div class="row justify-content-end align-items-end">
            <div class="col col-5 col-sm-4 col-md-3 col-lg-2 text-right">
              <p class="product-details product-title"><small class="text-muted">shipping method:</small></p>
            </div>
            <div class="col col-7 col-sm-6 col-md-5 col-lg-4 product-title text-right">
            </div>
          </div>
          <div class="row justify-content-end align-items-end ">
            <div class="col col-5 col-sm-4 col-md-3 col-lg-2 text-left border-bottom">
              <p class="product-details product-title"><small class="text-muted">
                <div class="input-group">
                  <div class="custom-control custom-radio">
                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"
                           v-model="selectedShipping" value="0">
                    <label class="custom-control-label" for="customRadio1">Snail mail</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"
                           v-model="selectedShipping" value="1">
                    <label class="custom-control-label" for="customRadio2">Express snail mail</label>

                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input"
                           v-model="selectedShipping" value="2">
                    <label class="custom-control-label" for="customRadio3">Courier</label>
                  </div>
                </div>
              </small></p>
            </div>
            <div class="col col-7 col-sm-6 col-md-5 col-lg-4 product-title text-right border-bottom">$ {{
                totalShipping
              }}
            </div>
          </div>
          <div class="row justify-content-end align-items-end">
            <div class="col col-5 col-sm-4 col-md-3 col-lg-2 text-right border-bottom">
              <p class="product-details product-title"><small class="text-muted">GRAND TOTAL</small></p>
            </div>
            <div class="col col-7 col-sm-6 col-md-5 col-lg-4 product-title text-right border-bottom font-weight-bold">$
              {{ grandTotal }}
            </div>
          </div>
          <div class="row justify-content-end align-items-end">
            <button class="btn btn-warning checkout" @click="checkOut">Proceed to Checkout</button>
          </div>
          <div class="row justify-content-end align-items-end">
            <p class="product-details product-title">
              <small class="text-muted error-message" v-if="showErrorMessage">
                Let's get this straight: we ain't paying for shipping. You are. Select a shipping method.</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  mounted () {
    window.scrollTo(0, 0)
  },
  data () {
    return {
      selectedShipping: null,
      shippingCost: [20.00, 25.00, 55.00],
      showErrorMessage: false
    }
  },
  methods: {
    addToCart (invId) {
      this.$store.dispatch('addToCart', invId)
    },
    removeFromCart (invId) {
      this.$store.dispatch('removeFromCart', invId)
    },
    deleteFromCart (invId) {
      this.$store.dispatch('deleteFromCart', invId)
    },
    checkOut () {
      if (!this.selectedShipping) {
        this.showErrorMessage = true
        this.$store.dispatch('checkOutEnable', false)
      } else {
        this.showErrorMessage = false
        this.$store.dispatch('checkOutEnable', true)
        this.$router.push('/check-out')
      }
    }
  },
  computed: {
    showCartContents () {
      const cartContents = []
      this.$store.getters.forSale.forEach(e => {
        this.$store.getters.addedToCart.forEach(f => {
          if (e.invId === f[0]) {
            e.quantity = f[1]
            e.subTotal = (Number(e.quantity) * Number(e.cost)).toFixed(2)
            cartContents.push(e)
          }
        })
      })
      cartContents.sort()
      this.$store.dispatch('checkOutItems', cartContents)
      return cartContents
    },
    totalPrice () {
      let totalPrice = 0
      totalPrice = this.showCartContents.reduce((a, b) => {
        return a + Number(b.subTotal)
      }, 0).toFixed(2)
      return totalPrice
    },
    totalShipping () {
      if (!this.selectedShipping) {
        const zero = 0
        return zero.toFixed(2)
      } else {
        let totalShipping = 0
        totalShipping = this.shippingCost[Number(this.selectedShipping)]
        this.$store.dispatch('selectedShippingMethod', this.shippingCost[Number(this.selectedShipping)])
        return totalShipping.toFixed(2)
      }
    },
    grandTotal () {
      let grandTotal = 0
      grandTotal = Number(this.totalPrice) + Number(this.totalShipping)
      grandTotal = grandTotal.toFixed(2)
      this.$store.dispatch('grandTotal', grandTotal)
      return grandTotal
    }
  }
}
</script>

<style scoped>

.checkout {
  margin-top: 16px;
}

.content {
  padding-bottom: 50px;
}

.error-message {
  color: red !important;
}

.form-control {
  text-align: center;
}

.img-div {
  padding-left: 2%;
}

.img-fluid {
  max-height: 150px;
}

.page-title {
  margin-top: 16px;
}

.product-details {
  margin-bottom: 0;
}

.product-title {
  margin-top: 15px;
}

.trash {
  cursor: pointer;
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
