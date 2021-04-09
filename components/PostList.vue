<template>
  <div>
    <div class="mb-3" v-for="(post, $index) in posts" :key="$index">
      <h3 class="text-xl">{{ post.title }}</h3>
      <p>{{ postExcerpt(post.content) }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PostList",
    props: {
      posts: {
        type: Array,
        required: true,
      },
    },
    methods: {
      postExcerpt(post) {
        return post.substring(0, 255) + "...";
      },
    },
  };
</script>
