import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index.js'
import database from '../database/productDatabase.json'
import countryList from '../database/countryList.json'
import authAxios from '../axios/axios-auth' // import Firebase authentication baseURL
import databaseAxios from 'axios' // import Firebase realtime database baseURL

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forSale: database.database,
    countryList: countryList,
    addedToCart: [],
    checkOutItems: [],
    grandTotal: 0,
    checkOutEnable: false,
    checkOutComplete: false,
    selectedShippingMethod: null,
    // backend related shit
    userAuthData: {
      idToken: null,
      localId: null,
      databaseId: null
    },
    userDetails: {
      name: null,
      sName: null,
      email: null
    },
    addressNotSaved: true,
    userAddress: {
      email: '',
      phoneNumber: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      postcode: '',
      state: '',
      country: ''
    },
    isLoggedIn: false,
    loginError: false,
    previousOrderData: []
  },
  getters: {
    forSale: state => {
      return state.forSale
    },
    countryList: state => {
      return state.countryList
    },
    addedToCart: state => {
      return state.addedToCart
    },
    checkOutItems: state => {
      return state.checkOutItems
    },
    grandTotal: state => {
      return state.grandTotal
    },
    checkOutEnable: state => {
      return state.checkOutEnable
    },
    checkOutComplete: state => {
      return state.checkOutComplete
    },
    selectedShippingMethod: state => {
      return state.selectedShippingMethod
    },
    // BACKEND SHIT
    isLoggedIn: state => {
      return state.userAuthData.idToken
    },
    loginError: state => {
      return state.loginError
    },
    getUserDetails: state => {
      return state.userDetails
    },
    getAddress: state => {
      return state.userAddress
    },
    addressNotSaved: state => {
      return state.addressNotSaved
    },
    previousOrderData: state => {
      return state.previousOrderData
    }
  },
  mutations: {
    ADD_TO_CART: (state, invId) => {
      const comparison = []
      state.addedToCart.forEach(e => {
        comparison.push(e[0])
        if (e[0] === invId) {
          e[1]++
        }
      })
      if (!comparison.includes(invId)) {
        state.addedToCart.push([invId, 1])
      }
      state.addedToCart.sort()
      localStorage.setItem('savedItems', JSON.stringify(state.addedToCart))
      return state.addedToCart
    },
    REMOVE_FROM_CART: (state, invId) => {
      state.addedToCart.forEach(e => {
        if (e[0] === invId) {
          if (e[1] > 0) {
            e[1]--
          }
        }
        state.addedToCart.sort()
        localStorage.setItem('savedItems', JSON.stringify(state.addedToCart))
        return state.addedToCart
      })
    },
    DELETE_FROM_CART: (state, invId) => {
      let index = null
      state.addedToCart.forEach(e => {
        if (e[0] === invId) {
          index = state.addedToCart.indexOf(e)
        }
      })
      state.addedToCart.splice(index, 1)
      localStorage.setItem('savedItems', JSON.stringify(state.addedToCart))
      return state.addedToCart
    },
    RETRIEVE_CART: (state) => {
      const savedItems = JSON.parse(localStorage.getItem('savedItems'))
      if (!savedItems) {
        return null
      } else {
        state.addedToCart = savedItems
        return state.addedToCart
      }
    },
    CHECK_OUT_ITEMS: (state, checkOutItems) => {
      const itemsToCheckOut = []
      checkOutItems.forEach(e => {
        if (e.quantity > 0) {
          itemsToCheckOut.push(e)
        }
      })
      state.checkOutItems = itemsToCheckOut
      return state.checkOutItems
    },
    GRAND_TOTAL: (state, grandTotal) => {
      state.grandTotal = grandTotal
      return state.grandTotal
    },
    SELECTED_SHIPPING_METHOD: (state, selectedShippingMethod) => {
      if (selectedShippingMethod === 20.00) {
        state.selectedShippingMethod = 'snail mail'
      }
      if (selectedShippingMethod === 25.00) {
        state.selectedShippingMethod = 'express snail mail'
      }
      if (selectedShippingMethod === 55.00) {
        state.selectedShippingMethod = 'courier'
      }
      return state.selectedShippingMethod
    },
    CHECK_OUT_ENABLE: (state, checkOutEnable) => {
      state.checkOutEnable = checkOutEnable
      return state.checkOutEnable
    },
    CHECK_OUT_COMPLETE: (state, checkOutComplete) => {
      state.checkOutComplete = checkOutComplete
      return state.checkOutComplete
    },

    // BACKEND STUFF
    ADDRESS_SAVE: (state, addressForm) => {
      state.userAddress.email = addressForm.email
      state.userAddress.phoneNumber = addressForm.phoneNumber
      state.userAddress.addressLine1 = addressForm.addressLine1
      state.userAddress.addressLine2 = addressForm.addressLine2
      state.userAddress.city = addressForm.city
      state.userAddress.postcode = addressForm.postcode
      state.userAddress.state = addressForm.state
      state.userAddress.country = addressForm.country
    },
    ADDRESS_NOT_SAVED: (state, addressNotSaved) => {
      state.addressNotSaved = addressNotSaved
    },
    AUTHORISE_USER: (state, userAuthData) => {
      state.userAuthData.idToken = userAuthData.idToken
      state.userAuthData.localId = userAuthData.localId
      state.userAuthData.databaseId = userAuthData.databaseId
      // state.isLoggedIn = true
    },
    CLEAR_CART: (state) => {
      state.addedToCart = []
      state.checkOutItems = []
    },
    FETCH_USER_DATA: (state, userDetails) => {
      state.userDetails.name = userDetails.name
      state.userDetails.sName = userDetails.sName
      state.userDetails.email = userDetails.email
    },
    LOGIN_ERROR: (state, loginError) => {
      state.loginError = loginError
      // state.isLoggedIn = false
    },
    LOGOUT: (state) => {
      state.userAuthData.idToken = null
      state.userAuthData.localId = null
      state.userAuthData.databaseId = null
      state.userDetails.name = null
      state.userDetails.sName = null
      state.userDetails.email = null
      state.userAddress.email = null
      state.userAddress.phoneNumber = null
      state.userAddress.addressLine1 = null
      state.userAddress.addressLine2 = null
      state.userAddress.city = null
      state.userAddress.postcode = null
      state.userAddress.state = null
      state.userAddress.country = null
      // state.isLoggedIn = false
    },
    PREVIOUS_ORDER_RETRIEVE: (state, orderData) => {
      state.previousOrderData = orderData
    }
  },
  actions: {
    addToCart: ({ commit }, invId) => {
      commit('ADD_TO_CART', invId)
    },
    removeFromCart: ({ commit }, invId) => {
      commit('REMOVE_FROM_CART', invId)
    },
    deleteFromCart: ({ commit }, invId) => {
      commit('DELETE_FROM_CART', invId)
    },
    retrieveCart: ({ commit }) => {
      commit('RETRIEVE_CART')
    },
    checkOutItems: ({ commit }, checkOutItems) => {
      commit('CHECK_OUT_ITEMS', checkOutItems)
    },
    grandTotal: ({ commit }, grandTotal) => {
      commit('GRAND_TOTAL', grandTotal)
    },
    selectedShippingMethod: ({ commit }, selectedShippingMethod) => {
      commit('SELECTED_SHIPPING_METHOD', selectedShippingMethod)
    },
    checkOutEnable: ({ commit }, checkOutEnable) => {
      commit('CHECK_OUT_ENABLE', checkOutEnable)
    },
    checkOutComplete: ({ commit }, checkOutComplete) => {
      commit('CHECK_OUT_COMPLETE', checkOutComplete)
    },

    // BACKEND ASYNC SHIT

    addressSave: ({ commit, state, dispatch }, addressForm) => {
      const databaseId = state.userDetails.email.match(/\w[a-z0-9_]+/gi).join('').toString()
      // make GET request in order to figure out if there is already an address stored in the database for the user
      databaseAxios.get('/' + databaseId + '.json?auth=' + state.userAuthData.idToken)
        .then(res => {
          console.log('addressSave ACTION -> GET REQUEST SUCCESSFUL')
          console.log(res.data)
          // If address does not exist, create a new one via PUT request.
          if (!res.data.address) {
            databaseAxios.put('/' + databaseId + '/address.json?auth=' + state.userAuthData.idToken, {
              email: addressForm.email,
              phoneNumber: addressForm.phoneNumber,
              addressLine1: addressForm.addressLine1,
              addressLine2: addressForm.addressLine2,
              city: addressForm.city,
              postcode: addressForm.postcode,
              state: addressForm.state,
              country: addressForm.country
            })
              .then(res => {
                commit('ADDRESS_SAVE', addressForm)
                console.log('addressSave ACTION -> PUT REQUEST SUCCESSFUL')
                console.log(res)
              })
              .catch(error => {
                console.log('addressSave ACTION -> PUT REQUEST ERROR')
                console.log(error)
              })
            // if address already exists in database, PATCH it
          } else {
            databaseAxios.patch('/' + databaseId + '/address.json?auth=' + state.userAuthData.idToken, {
              email: addressForm.email,
              phoneNumber: addressForm.phoneNumber,
              addressLine1: addressForm.addressLine1,
              addressLine2: addressForm.addressLine2,
              city: addressForm.city,
              postcode: addressForm.postcode,
              state: addressForm.state,
              country: addressForm.country
            })
              .then(res => {
                // is this really required? It'll grab the correct, patched data from the server
                // commit('ADDRESS_SAVE', addressForm)
                console.log('addressSave ACTION -> PATCH REQUEST SUCCESSFUL')
                console.log(res)
              })
              .catch(error => {
                console.log('addressSave ACTION -> PATCH REQUEST ERROR')
                console.log(error)
              })
          }
        })
        .catch(error => {
          console.log('addressSave ACTION -> GET REQUEST ERROR')
          console.log(error)
        })
    },
    addressRetrieve: ({ commit, state, dispatch }) => {
      const databaseId = state.userAuthData.databaseId
      databaseAxios.get('/' + databaseId + '/address.json?auth=' + state.userAuthData.idToken)
        .then(res => {
          console.log('addressRetrieve ACTION -> GET REQUEST SUCCESSFUL')
          console.log(res)
          if (res.data === null) {
            commit('ADDRESS_NOT_SAVED', true)
            return
          }
          commit('ADDRESS_NOT_SAVED', false)
          commit('ADDRESS_SAVE', {
            email: res.data.email,
            phoneNumber: res.data.phoneNumber,
            addressLine1: res.data.addressLine1,
            addressLine2: res.data.addressLine2,
            city: res.data.city,
            postcode: res.data.postcode,
            state: res.data.state,
            country: res.data.country
          })
        })
        .catch(error => {
          console.log('addressRetrieve ACTION -> GET REQUEST UNSUCCESSFUL')
          // autologout if the status is not 200 - this means that the token held in cache has expired.
          dispatch('logout')
          console.log(error)
        })
    },
    autoLogout: ({ commit }, expiresIn) => {
      setTimeout(() => {
        commit('LOGOUT')
      }, expiresIn * 1000)
    },
    autoLogin: ({ commit }) => {
      const idToken = localStorage.getItem('idToken')
      if (!idToken) {
        return null
      }
      const expiration = localStorage.getItem('expiration')
      const now = new Date()
      if (now >= expiration) {
        return null
      }
      const localId = localStorage.getItem('localId')
      const databaseId = localStorage.getItem('databaseId')
      commit('AUTHORISE_USER', {
        idToken: idToken,
        localId: localId,
        databaseId: databaseId
      })
    },
    checkout: ({ commit, state, dispatch }) => {
      if (!state.userAuthData.idToken) {
        localStorage.removeItem('savedItems')
        commit('CLEAR_CART')
        router.replace('/purchase-complete')
      } else {
        const databaseId = state.userAuthData.databaseId
        const date = new Date()
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December']
        const timeOfOrder = `${date.getHours()}:${date.getMinutes()}`
        const dateOfOrder = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
        const storageLocation = `${date.getUTCFullYear()}${date.getUTCMonth()}${date.getUTCDate()}${date.getUTCHours()}${date.getUTCMinutes()}${date.getUTCSeconds()}`
        databaseAxios.put('/' + databaseId + '/orders/' + storageLocation + '.json?auth=' + state.userAuthData.idToken, {
          items: state.checkOutItems,
          total: state.grandTotal,
          date: dateOfOrder,
          time: timeOfOrder,
          shippingMethod: state.selectedShippingMethod
        })
          .then(res => {
            console.log(res)
            localStorage.removeItem('savedItems')
            commit('CLEAR_CART')
            router.replace('/purchase-complete')
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    fetchUserData: ({ commit, state, dispatch }) => {
      if (!state.userAuthData.idToken) {
        return null
      }
      databaseAxios.get('/' + state.userAuthData.databaseId + '.json?auth=' + state.userAuthData.idToken)
        .then(res => {
          commit('FETCH_USER_DATA', {
            name: res.data.name,
            sName: res.data.sName,
            email: res.data.email
          })
          commit('LOGIN_ERROR', false)
        })
        .catch(error => {
          console.log(error)
          dispatch('logout')
        })
    },
    logout: ({ commit }) => {
      commit('LOGOUT')
      localStorage.removeItem('expiration')
      localStorage.removeItem('localId')
      localStorage.removeItem('idToken')
      localStorage.removeItem('databaseId')
      router.replace('/sign-in')
    },
    previousOrderRetrieve: ({ commit, state, dispatch }) => {
      const databaseId = state.userAuthData.databaseId
      databaseAxios.get('/' + databaseId + '.json?auth=' + state.userAuthData.idToken)
        .then(res => {
          console.log('previousOrderRetrieve - ACTION')
          console.log(res.data)
          /// DOUBLE CHECK
          if (res.data.orders) {
            const orderData = res.data.orders
            commit('PREVIOUS_ORDER_RETRIEVE', orderData)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    signUp: ({ commit, dispatch }, formData) => {
      const databaseId = formData.email.match(/\w[a-z0-9_]+/gi).join('').toString()
      authAxios.post('/accounts:signUp?key=AIzaSyAq41Bg_NqQflaWS2HPpEaBIcJDMJJfDyo', {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          const now = new Date()
          const expiration = new Date(now.getTime() + (res.data.expiresIn * 1000))
          localStorage.setItem('expiration', expiration)
          localStorage.setItem('localId', res.data.localId)
          localStorage.setItem('idToken', res.data.idToken)
          localStorage.setItem('databaseId', databaseId)
          commit('AUTHORISE_USER', {
            localId: res.data.localId,
            idToken: res.data.idToken,
            databaseId: databaseId
          })
          dispatch('storeUserData', formData)
            .then(dispatch('fetchUserData'))
          dispatch('autoLogout', res.data.expiresIn)
          router.replace('/sign-in')
        })
        .catch(error => {
          console.log(error)
        })
    },
    signIn: ({ commit, dispatch }, formData) => {
      // work out the unique ID for a given user's database storage location:
      const databaseId = formData.email.match(/\w[a-z0-9_]+/gi).join('').toString()
      authAxios.post('/accounts:signInWithPassword?key=AIzaSyAq41Bg_NqQflaWS2HPpEaBIcJDMJJfDyo', {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          const now = new Date()
          const expiration = new Date(now.getTime() + (res.data.expiresIn * 1000))
          localStorage.setItem('expiration', expiration)
          localStorage.setItem('localId', res.data.localId)
          localStorage.setItem('idToken', res.data.idToken)
          localStorage.setItem('databaseId', databaseId)
          commit('AUTHORISE_USER', {
            localId: res.data.localId,
            idToken: res.data.idToken,
            databaseId: databaseId
          })
          dispatch('fetchUserData')
          dispatch('autoLogout', res.data.expiresIn)
          dispatch('addressRetrieve')
          commit('LOGIN_ERROR', false)
          if (formData.route === '/sign-in') {
            router.replace('/')
          }
        })
        .catch(error => {
          console.log(error)
          commit('LOGIN_ERROR', true)
        })
    },
    storeUserData: ({ commit, state }, userData) => {
      if (!state.userAuthData.idToken) {
        console.log('User not logged in.')
      }
      // create unique ID for database storage:
      const databaseId = userData.email.match(/\w[a-z0-9_]+/gi).join('').toString()
      // put request to custom database location:
      databaseAxios.put('/' + databaseId + '.json?auth=' + state.userAuthData.idToken, {
        email: userData.email,
        name: userData.name,
        sName: userData.sName
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  },
  modules: {}
})
