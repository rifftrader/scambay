<template>
  <div class="container container-fluid content">
    <b-alert show dismissible variant="danger">WARNING! Do not fill any sensitive information into the form below,
      as this site is not completely secure.
    </b-alert>
    <form class="form-signin container col-lg-4">
      <h1 class="h3 mb-3 font-weight-normal">Create an account</h1>
      <br>

      <label for="fName" class="text-muted">First name</label>
      <input type="text" id="fName" class="form-control hvr-grow"
             v-model="name"
             required autofocus
             autocomplete="none">
      <p><small class="form-text text-muted form-feedback">{{ feedback.name }}</small></p>

      <label for="sName" class="text-muted">Surname</label>
      <input type="text" id="sName" class="form-control hvr-grow" v-model="sName" autofocus
             autocomplete="none">
      <p><small class="form-text text-muted form-feedback">{{ feedback.sName }}</small></p>

      <label for="email" class="text-muted">Email address</label>
      <input type="email" id="email" class="form-control hvr-grow" v-model="email" autofocus
             autocomplete="none">
      <p><small class="form-text text-muted form-feedback">{{ feedback.email }}</small></p>

      <label for="confirmEmail" class="text-muted">Confirm email address</label>
      <input type="email" id="confirmEmail" class="form-control hvr-grow" v-model="confirmEmail"
             autofocus autocomplete="none">
      <p><small class="form-text text-muted form-feedback">{{ feedback.confirmEmail }}</small></p>

      <label for="password" class="text-muted">Password</label>
      <input type="password" id="password" class="form-control hvr-grow" v-model="password">
      <p><small class="form-text text-muted form-feedback">{{ feedback.password }}</small>
      </p>

      <label for="confirmPassword" class="text-muted">Confirm password</label>
      <input type="password" id="confirmPassword" class="form-control hvr-grow" v-model="confirmPassword">
      <p><small class="form-text text-muted form-feedback">{{ feedback.confirmPassword }}</small></p>

      <br>
      <button class="btn btn-lg btn-warning btn-block" type="submit" @click.prevent="signUp">Sign Up</button>
      <p class="mt-5 mb-3 text-muted">Already have an account? Sign in
        <router-link to="/sign-in">here</router-link>
        .
      </p>
    </form>
    <div class="alert alert-danger" role="alert" v-if="showErrorMessage">
      There's been a problem - please check that all fields are filled in correctly. If they are, the email address that
      you selected is probably already in use.
    </div>

  </div>
</template>

<script>
export default {
  name: 'Signup',
  mounted () {
    window.scrollTo(0, 0)
  },
  data () {
    return {
      name: '',
      sName: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      dataValidation: {
        name: false,
        sName: false,
        email: false,
        confirmEmail: false,
        password: false,
        confirmPassword: false
      },
      feedback: {
        name: '',
        sName: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: ''
      },
      showErrorMessage: false
    }
  },
  methods: {
    signUp () {
      const formData = {
        name: this.name,
        sName: this.sName,
        email: this.email,
        password: this.password
      }
      if (this.validateAllData()) {
        console.log('data sent')
        this.showErrorMessage = false
        this.$store.dispatch('signUp', formData)
      } else {
        this.showErrorMessage = true
        console.log("can't pass validation")
      }
    },
    nameLength (input) {
      if (input.length === 0) {
        return 'Write something, damn you!'
      } else if (input.length === 1) {
        return ' Surely your name has more than 1 character. Try harder.'
      } else if (input.length > 42) {
        return ' I seriously doubt your name is ' + input.length + ' characters long.'
      } else {
        return ''
      }
    },
    nameValidCharacter (input) {
      if (input.match(/\W|[0-9]|_/gi) === null) {
        return ''
      } else {
        return "Don't be silly: please don't use special characters or numbers."
      }
    },
    nameValidate (inputString) {
      if (inputString === '') {
        return true
      } else {
        return false
      }
    },
    validateAllData () {
      if (this.dataValidation.name && this.dataValidation.sName && this.dataValidation.email && this.dataValidation.confirmEmail && this.dataValidation.password && this.dataValidation.confirmPassword) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    name: {
      handler () {
        this.feedback.name = this.nameValidCharacter(this.name) + this.nameLength(this.name)
        this.dataValidation.name = this.nameValidate(this.feedback.name)
      }
    },
    sName: {
      handler () {
        this.feedback.sName = this.nameValidCharacter(this.sName) + this.nameLength(this.sName)
        this.dataValidation.sName = this.nameValidate(this.feedback.sName)
      }
    },
    email: {
      handler () {
        const emailRegEx = /[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,3}/gi
        let email = this.email.match(emailRegEx)
        if (email != null) {
          email = email.toString()
        }
        if (email === this.email) {
          this.feedback.email = ''
          this.dataValidation.email = true
        } else {
          this.feedback.email = 'Please enter a valid email address'
          this.dataValidation.email = false
        }
      }
    },
    confirmEmail: {
      handler () {
        if ((this.confirmEmail !== '') && this.confirmEmail.match(this.email) && (this.confirmEmail.length === this.email.length)) {
          this.feedback.confirmEmail = ''
          this.dataValidation.confirmEmail = true
        } else if (this.confirmEmail === '') {
          this.feedback.confirmEmail = 'This field cannot be empty.'
          this.dataValidation.confirmEmail = false
        } else {
          this.feedback.confirmEmail = "Email addresses don't match."
          this.dataValidation.confirmEmail = false
        }
      }
    },
    password: {
      handler () {
        const passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
        if (this.password.match(passwordRegEx)) {
          this.feedback.password = ''
          this.dataValidation.password = true
        } else {
          this.feedback.password = 'Password must be between 7 and 15 characters in length and have at least one number and special character (!@#%^&*).'
          this.dataValidation.password = false
        }
      }
    },
    confirmPassword: {
      handler () {
        if (this.confirmPassword.match(this.password) && (this.confirmPassword.length === this.password.length)) {
          this.feedback.confirmPassword = ''
          this.dataValidation.confirmPassword = true
        } else {
          this.feedback.confirmPassword = 'Your passwords do not match.'
          this.dataValidation.confirmPassword = false
        }
      }
    }
  }
}

</script>

<style scoped>
label {
  margin: 0;
}

.content {
  padding: 50px;
}

.form-control {
  margin: 10px 0;
}

.form-feedback {
  color: red !important;
  margin: 0;
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
