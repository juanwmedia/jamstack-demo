<template>
  <div>
    <nuxt-link to="/">
      <AppHeader />
    </nuxt-link>
    <div class="container">
      <Nuxt />
    </div>
    <AppFooter />
  </div>
</template>
<script>
  import AppHeader from "../components/AppHeader.vue";
  import AppFooter from "../components/AppFooter.vue";
  export default {
    components: {
      AppHeader,
      AppFooter,
    },
  };
</script>
