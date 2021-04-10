<template>
  <div class="container">
    <AppAuth />
    <nuxt-link to="/">
      <AppHeader />
    </nuxt-link>
    <Nuxt />
    <AppFooter />
  </div>
</template>
<script>
  import AppHeader from "../components/AppHeader.vue";
  import AppFooter from "../components/AppFooter.vue";
  import AppAuth from "../components/AppAuth.vue";
  export default {
    components: {
      AppHeader,
      AppFooter,
      AppAuth,
    },
  };
</script>
