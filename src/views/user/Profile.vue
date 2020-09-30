<template>
  <div class="content container">
    <h1>User Dashboard</h1>
    <br>
    <div class="row">
      <div class="col-lg-12 col-md-10 col-sm-8">
        <p class="font-weight-bold">Welcome {{ fName }}!</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-10 col-sm-8">
        <p>Here you can view and administer various bits and pieces pertaining to your profile. Take a look around.</p>
      </div>
    </div>
    <br>

    <div class="row">

      <!--ACCORDION-->
      <template>
        <div class="accordion w-100" role="tablist">

          <!--USER DETAILS-->
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="warning"><span
                class="font-weight-bold">User Details</span></b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <div class="container">
                  <div class="row">
                    <div class="col-6 col-lg-2"><p class="font-weight-bold text-left">First Name:</p></div>
                    <div class="col-6 col-lg-10"><p class="text-left">{{ fName }}</p></div>
                  </div>
                  <div class="row">
                    <div class="col-6 col-lg-2"><p class="font-weight-bold text-left">Surname:</p></div>
                    <div class="col-6 col-lg-10"><p class="text-left">{{ sName }}</p></div>
                  </div>
                  <div class="row">
                    <div class="col-6 col-lg-2"><p class="font-weight-bold text-left">Email Address:</p></div>
                    <div class="col-6 col-lg-10"><p class="text-left">{{ emailAddress }}</p></div>
                  </div>
                  <!--                  conditional showing-->
                  <div v-if="!addressNotSaved">
                    <div class="row">
                      <div class="col-6 col-lg-2"><p class="font-weight-bold text-left">Delivery Phone Number:</p></div>
                      <div class="col-6 col-lg-10"><p class="text-left">{{ addressFromStore.phoneNumber }}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-lg-2"><p class="font-weight-bold text-left">Delivery Email Address:</p>
                      </div>
                      <div class="col-6 col-lg-10"><p class="text-left">{{ addressFromStore.email }}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-lg-2"><p class="font-weight-bold text-left">Delivery Address:</p></div>
                      <div class="col-6 col-lg-10"><p class="text-left">{{ addressFromStore.addressLine1 }}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-lg-2"><p class="font-weight-bold text-left"></p></div>
                      <div class="col-6 col-lg-10"><p class="text-left">{{ addressFromStore.addressLine2 }}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-lg-2"><p class="font-weight-bold text-left"></p></div>
                      <div class="col-6 col-lg-10"><p class="text-left">{{ addressFromStore.city }}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-lg-2"><p class="font-weight-bold text-left"></p></div>
                      <div class="col-6 col-lg-10"><p class="text-left">{{ addressFromStore.postcode }}</p></div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-lg-2"><p class="font-weight-bold text-left"></p></div>
                      <div class="col-6 col-lg-10"><p class="text-left">{{ addressFromStore.country }}</p></div>
                    </div>
                  </div>
                </div>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!--          DELIVERY ADDRESS-->

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="warning"><span
                class="font-weight-bold">Add or Modify Delivery Address</span></b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <div class="container border-bottom">
                  <div class="row">If you wish to add or update your address, please click on the "Edit" button. Once
                    you're done, press "Save Address".
                  </div>
                  <br>
                  <div class="row">
                    <div class="col-6 col-lg-2">
                      <b-button block variant="outline-secondary" size="sm" @click="enableFormEdit">Edit</b-button>
                    </div>
                  </div>
                  <br>
                </div>
                <br>
                <form class="">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label class="label-form" for="email">Email address</label>
                      <input type="text" class="form-control hvr-grow" id="email" placeholder="Email address..."
                             v-bind:disabled="isFormDisabled" v-model="addressForm.email">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="label-form" for="confirmEmail">Telephone Number</label>
                      <input type="text" class="form-control hvr-grow" id="confirmEmail"
                             placeholder="Telephone number..." v-bind:disabled="isFormDisabled"
                             v-model="addressForm.phoneNumber">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="label-form" for="inputAddress">Address Line 1</label>
                    <input type="text" class="form-control hvr-grow" id="inputAddress" placeholder="Address line 1..."
                           v-bind:disabled="isFormDisabled" v-model="addressForm.addressLine1">
                  </div>
                  <div class="form-group">
                    <label class="label-form" for="inputAddress2">Address Line 2</label>
                    <input type="text" class="form-control hvr-grow" id="inputAddress2" placeholder="Address line 2..."
                           v-bind:disabled="isFormDisabled" v-model="addressForm.addressLine2">
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-3">
                      <label class="label-form" for="inputCity">City</label>
                      <input type="text" class="form-control hvr-grow" id="inputCity" placeholder="City..."
                             v-bind:disabled="isFormDisabled" v-model="addressForm.city">
                    </div>
                    <div class="form-group col-md-2">
                      <label class="label-form" for="postCode">Postcode</label>
                      <input type="text" class="form-control hvr-grow" id="postCode" placeholder="Postcode..."
                             v-bind:disabled="isFormDisabled" v-model="addressForm.postcode">
                    </div>
                    <div class="form-group col-md-3">
                      <label class="label-form" for="inputState">State</label>
                      <input type="text" class="form-control hvr-grow" id="inputState" placeholder="State..."
                             v-bind:disabled="isFormDisabled" v-model="addressForm.state">
                    </div>
                    <div class="form-group col-md-4">
                      <label class="label-form" for="country">Country</label>
                      <select id="country" class="form-control hvr-grow" v-bind:disabled="isFormDisabled"
                              v-model="addressForm.country">
                        <option selected v-for="country in countryList" :key="country.name">{{ country.name }}</option>
                      </select>
                    </div>
                  </div>
                </form>
                <br>
                <div class="container border-top">
                  <br>
                  <div class="row">
                    <div class="col-6 col-lg-2">
                      <b-button block variant="success" size="sm" v-bind:disabled="isFormDisabled" @click="addressSave">
                        Save Address
                      </b-button>
                    </div>
                  </div>
                  <br>
                </div>

              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="warning"><span
                class="font-weight-bold">Previous Orders</span></b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text v-if="previousOrderData === null || previousOrderData === undefined || previousOrderData.length === 0">You have not made any previous orders.</b-card-text>
                <div v-if="previousOrderData">

                  <div class="order-summary" v-for="(e, i) in previousOrderData" :key="i">
                    <br>
                    <div class="row justify-content-start">
                      <div class="col-12 col-lg-12"><p class="date-time-stamp summary-text text-left">
                        {{ e.date }} at {{ e.time }}</p></div>
                    </div>
                    <br>
                    <div v-for="(f, j) in e.items" :key="j">
                      <div>
                        <div class="row justify-content-center">
                          <div class="col-2 col-lg-1 border border-right-0 border-bottom-0"><p class="summary-text">
                            {{ f.quantity }}</p></div>
                          <div class="col-5 col-lg-4 border border-right-0 border-bottom-0"><p
                            class="summary-text text-left">
                            {{ f.productName }}</p></div>
                          <div class="col-5 col-lg-4 border border-left-0  border-bottom-0"><p
                            class="summary-text text-right">$
                            {{ f.subTotal }}</p></div>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-7 col-lg-5 border border-right-0 summary-price">
                        <p class="summary-text text-left">
                          <span class="font-weight-bold">Total Paid </span><small>(including {{ e.shippingMethod }} delivery)</small>
                        </p>
                      </div>
                      <div class="col-5 col-lg-4 border border-left-0 summary-price"><p
                        class="summary-text text-right font-weight-bold">$
                        {{ e.total }}</p></div>
                    </div>
                    <br>
                  </div>

                </div>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      isFormDisabled: true,
      dataUploadOk: false,
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
  methods: {
    enableFormEdit () {
      this.isFormDisabled = !this.isFormDisabled
      this.addressForm.email = this.addressFromStore.email
      this.addressForm.phoneNumber = this.addressFromStore.phoneNumber
      this.addressForm.addressLine1 = this.addressFromStore.addressLine1
      this.addressForm.addressLine2 = this.addressFromStore.addressLine2
      this.addressForm.city = this.addressFromStore.city
      this.addressForm.postcode = this.addressFromStore.postcode
      this.addressForm.state = this.addressFromStore.state
      this.addressForm.country = this.addressFromStore.country
    },
    addressSave () {
      this.$store.dispatch('addressSave', {
        email: this.addressForm.email,
        phoneNumber: this.addressForm.phoneNumber,
        addressLine1: this.addressForm.addressLine1,
        addressLine2: this.addressForm.addressLine2,
        city: this.addressForm.city,
        postcode: this.addressForm.postcode,
        state: this.addressForm.state,
        country: this.addressForm.country
      })
      this.isFormDisabled = true
      setTimeout(() => {
        this.$store.dispatch('addressRetrieve')
      }, 5000)
    }
  },
  computed: {
    fName () {
      return this.$store.getters.getUserDetails.name
    },
    sName () {
      return this.$store.getters.getUserDetails.sName
    },
    emailAddress () {
      return this.$store.getters.getUserDetails.email
    },
    countryList () {
      return this.$store.getters.countryList
    },
    addressFromStore () {
      return this.$store.getters.getAddress
    },
    addressNotSaved () {
      return this.$store.getters.addressNotSaved
    },
    previousOrderData () {
      return this.$store.getters.previousOrderData
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.$store.dispatch('addressRetrieve')
    this.$store.dispatch('previousOrderRetrieve')
  }
}
</script>

<style scoped>

.w-100 {
  max-width: 90%;
}

.content {
  padding: 50px 0;
}

.date-time-stamp {
  text-decoration: underline;
}

.summary-text {
  margin-bottom: 0;
}

</style>
