<template>
  <div class="content">
    <h1 class="page-title">Check Out</h1>
    <br>
    <!--    LOGIN DETAILS - hide if logged in-->
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-10 col-sm-8" v-if="!isLoggedIn">
          <p>Have an account already?
            <span v-b-modal.modal-center class="signin font-weight-bold">Sign in</span>. If not, don't worry about it: you can check out as a guest.</p>
        </div>
      </div>

      <!--  LOGIN MODAL-->
      <div>
        <b-modal id="modal-center" title="Sign In" ref="modal" hide-footer>
          <form class="form-signin container col-lg-8">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control hvr-grow" placeholder="Email address" v-model="email"
                   autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control hvr-grow" placeholder="Password" v-model="password">
            <div class="checkbox mb-3">
            </div>
            <button class="btn btn-lg btn-warning btn-block" type="submit" @click.prevent="signIn">Sign in</button>
            <p class="mt-5 mb-3 text-muted">Don't have an account? Sign up
              <router-link to="/sign-up">here</router-link>
              .
            </p>
          </form>
        </b-modal>

        <!--        SUMMARY OF ORDER-->
        <div class="row justify-content-center">
          <div class="col-10 col-lg-12"><p class="font-weight-bold step-text text-left">Step 1</p></div>
          <div class="col-2 col-lg-1"></div>
        </div>

        <div class="row justify-content-center">
          <div class="col-10 col-lg-12"><p class="text-left">Please review your order. Hit the back button to
            correct anything.</p></div>
          <div class="col-2 col-lg-1"></div>
        </div>
        <div class="order-summary">
          <div class="row justify-content-center" v-for="(e) in cartContents" :key="e.invId">
            <div class="col-2 col-lg-1 border border-right-0 border-bottom-0"><p class="summary-text">
              {{ e.quantity }}</p></div>
            <div class="col-5 col-lg-4 border border-right-0 border-bottom-0"><p class="summary-text text-left">
              {{ e.productName }}</p></div>
            <div class="col-5 col-lg-4 border border-left-0  border-bottom-0"><p class="summary-text text-right">$
              {{ e.subTotal }}</p></div>
          </div>
          <div class="row justify-content-center">
            <div class="col-7 col-lg-5 border border-right-0 summary-price">
              <p class="summary-text text-left">
                <span class="font-weight-bold">GRAND TOTAL</span>
                <small class="font-weight-bold"> (including {{ selectedShippingMethod }} delivery)</small>
              </p>
            </div>
            <div class="col-5 col-lg-4 border border-left-0 summary-price"><p
              class="summary-text text-right font-weight-bold">$
              {{ grandTotal }}</p></div>
          </div>
        </div>
        <br>
        <br>
        <div class="row justify-content-center">
          <div class="col-10 col-lg-12"><p class="font-weight-bold step-text text-left">Step 2</p></div>
          <div class="col-2 col-lg-1"></div>
        </div>
        <div class="row justify-content-center">
          <div class="col-10 col-lg-12"><p class="text-left"><span v-if="isLoggedIn">You're logged in. Click <a class="add-address font-weight-bold" @click="retrieveAddress">here</a> to use the address we have saved for you. You can modify it before purchase.</span><span v-if="!isLoggedIn">Please check/enter your delivery contact details and address:</span></p></div>
          <div class="col-2 col-lg-1"></div>
        </div>
        <br>
        <!--        ADDRESS FORM-->
        <b-alert show dismissible variant="danger">WARNING! Do not fill any sensitive information into the form below,
          as this site is not completely secure.
        </b-alert>
        <form class="border address-form">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label class="label-form" for="email">Email address</label>
              <input type="text" class="form-control hvr-grow" id="email" placeholder="Email address..." v-model="addressForm.email">
            </div>
            <div class="form-group col-md-6">
              <label class="label-form" for="confirmEmail">Telephone Number</label>
              <input type="text" class="form-control hvr-grow" id="confirmEmail" placeholder="Telephone number..." v-model="addressForm.phoneNumber">
            </div>
          </div>
          <div class="form-group">
            <label class="label-form" for="inputAddress">Address Line 1</label>
            <input type="text" class="form-control hvr-grow" id="inputAddress" placeholder="Address line 1..." v-model="addressForm.addressLine1">
          </div>
          <div class="form-group">
            <label class="label-form" for="inputAddress2">Address Line 2</label>
            <input type="text" class="form-control hvr-grow" id="inputAddress2" placeholder="Address line 2..." v-model="addressForm.addressLine2">
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label class="label-form" for="inputCity">City</label>
              <input type="text" class="form-control hvr-grow" id="inputCity" placeholder="City..." v-model="addressForm.city">
            </div>
            <div class="form-group col-md-2">
              <label class="label-form" for="postCode">Postcode</label>
              <input type="text" class="form-control hvr-grow" id="postCode" placeholder="Postcode..." v-model="addressForm.postcode">
            </div>
            <div class="form-group col-md-3">
              <label class="label-form" for="inputState">State</label>
              <input type="text" class="form-control hvr-grow" id="inputState" placeholder="State..." v-model="addressForm.state">
            </div>
            <div class="form-group col-md-4">
              <label class="label-form" for="country">Country</label>
              <select id="country" class="form-control hvr-grow" v-model="addressForm.country">
                <option selected v-for="country in countryList" :key="country.name">{{ country.name }}</option>
              </select>
            </div>
          </div>
        </form>
        <br>
        <br>
        <!--        PAYMENT DETAILS-->
        <div class="row justify-content-center">
          <div class="col-10 col-lg-12"><p class="font-weight-bold step-text text-left">Step 3</p></div>
          <div class="col-2 col-lg-1"></div>
        </div>
        <div class="row justify-content-center">
          <div class="col-10 col-lg-12"><p class="text-left">Now for our favourite part. Please enter your
            payment card details:</p></div>
          <div class="col-2 col-lg-1"></div>
        </div>
        <br>
        <form class="border">
          <fieldset disabled>
            <div class="form-row">
              <div class="form-group col-md-5">
                <label class="label-form" for="cardholder-name">Cardholder Name</label>
                <input type="text" class="form-control" id="cardholder-name" placeholder="Your neighbour's name">
              </div>
              <div class="form-group col-md-5">
                <label class="label-form" for="card-number">Payment Card Number</label>
                <input type="text" class="form-control" id="card-number" placeholder="1234 1234 1234 1234">
              </div>
              <div class="form-group col-md-2">
                <label class="label-form" for="cvc-number">CVC</label>
                <input type="text" class="form-control" id="cvc-number" placeholder="123">
              </div>
            </div>
          </fieldset>
        </form>
        <br>
        <div class="row justify-content-end">
          <div class="col-12 col-lg-12"><p class="text-muted text-right">Payment system powered by <img
            class="masterfake-logo" src="../../public/img/masterfake_logo.png" height="100" width="100"/></p></div>
        </div>
        <div class="row justify-content-end">
          <div class="col-12 col-lg-12 text-right">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="terms-and-conditions" @click="acceptConditions">
              <label class="form-check-label text-muted" for="terms-and-conditions">
                I understand and consent to all terms and conditions.
              </label>
            </div>
          </div>
        </div>
        <br>
        <div class="row justify-content-end">
          <div class="col-12 col-lg-12 text-right">
            <button class="btn btn-warning" @click="checkOutComplete">Purchase!</button>
          </div>
        </div>
        <div class="row justify-content-end align-items-end">
          <p class="product-details product-title">
            <small class="text-muted error-message" v-if="showErrorMessage">
              Please accept the terms and conditions before proceeding.</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckOut',
  data () {
    return {
      consentToPayment: false,
      showErrorMessage: false,
      email: '',
      password: '',
      addressForm: {
        email: '',
        phoneNumber: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        postcode: '',
        state: '',
        country: ''
      }
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    acceptConditions () {
      this.consentToPayment = !this.consentToPayment
      if (this.consentToPayment === true) {
        this.$store.dispatch('checkOutComplete', true)
      } else {
        this.$store.dispatch('checkOutComplete', false)
      }
    },
    checkOutComplete () { // maybe make this a dispatch
      // navigate to next route
      if (this.consentToPayment) {
        this.$store.dispatch('checkout')
        // this.$router.push('/purchase-complete')
      } else {
        this.showErrorMessage = true
      }
    },
    signIn () {
      const formData = {
        email: this.email,
        password: this.password,
        route: '/check-out'
      }
      this.$refs.modal.hide()
      this.$store.dispatch('signIn', formData)
    },
    retrieveAddress () {
      this.addressForm.email = this.$store.getters.getAddress.email
      this.addressForm.phoneNumber = this.$store.getters.getAddress.phoneNumber
      this.addressForm.addressLine1 = this.$store.getters.getAddress.addressLine1
      this.addressForm.addressLine2 = this.$store.getters.getAddress.addressLine2
      this.addressForm.city = this.$store.getters.getAddress.city
      this.addressForm.postcode = this.$store.getters.getAddress.postcode
      this.addressForm.state = this.$store.getters.getAddress.state
      this.addressForm.country = this.$store.getters.getAddress.country
    }
  },
  computed: {
    cartContents () {
      return this.$store.getters.checkOutItems
    },
    grandTotal () {
      return this.$store.getters.grandTotal
    },
    selectedShippingMethod () {
      return this.$store.getters.selectedShippingMethod
    },
    countryList () {
      return this.$store.getters.countryList
    },
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>

<style scoped>

.address-form {
  background-color: #f8f9fa;
}
.add-address:hover{
  cursor: pointer;
  text-decoration: underline;
}
form {
  padding: 10px;
}

.content {
  padding-bottom: 50px;
}

.error-message {
  color: red !important;
}

.form-control {
  margin: 10px 0;
}

.form-group {
  margin: 0;
}

.label-form {
  margin: 0;
}

.masterfake-logo {
  display: inline-block;
}

.order-summary {
  padding: 10px;
}

.page-title {
  margin-top: 16px;
}

.signin:hover {
  text-decoration: underline;
  cursor: pointer;
}

.summary-text {
  margin-bottom: 0;
}

.summary-price {
  background-color: #ffcc25;
}

.step-text {
  text-decoration: underline;
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
