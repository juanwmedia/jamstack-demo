<template>
  <div class="container">
    <h1 class="text-2xl">Published posts:</h1>
    <PostList class="mt-3" :posts="posts" />
  </div>
</template>
<script>
  import PostList from "../components/PostList.vue";
  export default {
    name: "Index",
    created() {
      const { posts } = require("../seed.json");
      this.posts = posts;
    },
    data() {
      return {
        posts: [],
      };
    },
    components: {
      PostList,
    },
  };
</script>
