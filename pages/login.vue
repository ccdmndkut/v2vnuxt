<template>
  <!-- <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <v-card>
        <v-card-title class="headline">Login Here</v-card-title>
        <v-card-text>
          <p>Login form will go here.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            flat
            nuxt
            to="/inspire">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>-->
  <div>
    <h2>Login</h2>
    <hr>
    <v-alert
      v-model="hasError"
      :value="hasError"
      dismissible
      type="error"
    >
      {{ error }}
    </v-alert>
    <v-alert
      v-if="redirect"
      show
    >
      You have to login before accessing to
      <strong>{{ redirect }}</strong>
    </v-alert>

    <v-form
      id="login-form"
      @keydown.enter="handleLogin"
    >

      <v-text-field
        ref="email"
        v-model="email"
        type="email"
        placeholder="Your Email..."
        required
      />

      <v-text-field
        v-model="password"
        type="password"
        required
        placeholder="Your Password..."
      />

      <div class="text-right">
        <v-btn
          outline
          large
          @click="handleLogin"
        >Login with Firebase</v-btn>
      </div>
    </v-form>
  </div>
</template>


<script>
export default {
  layout: 'login',
  middleware: ['auth'],
  data() {
    return {
      email: '',
      password: '',
      hasError: false,
      error: null
    }
  },
  computed: {
    redirect() {
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
      )
    },
    isCallback() {
      return Boolean(this.$route.query.callback)
    },
    loginData() {
      const data = {
        email: this.email,
        password: this.password
      }
      return data
    }
  },
  mounted() {
    // this.$refs.email.focus()
  },
  methods: {
    async handleLogin() {
      this.hasError = false
      this.error = null
      return this.$auth.loginWith('firebase', this.loginData).catch(e => {
        this.hasError = true
        this.error = e + ''
        console.log(e)
      })
    }
  }
}
</script>
