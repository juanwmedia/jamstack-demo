<template>
  <div class="text-center mt-3">
    <a v-if="!$store.state.user" @click="doLogin" href="#">Login with Google</a>
    <a v-else @click="doLogout" href="#">Logout</a>
  </div>
</template>

<script>
  export default {
    name: "AppAuth",
    methods: {
      doLogin() {
        try {
          this.$store.dispatch('signInWithGoogle')
        } catch(error) {
          console.error(error)
        }
      },
      doLogout() {
        this.$store.dispatch('signOut')
      }
    }
  };
</script>
