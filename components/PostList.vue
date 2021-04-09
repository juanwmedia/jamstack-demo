<template>
  <div>
    <div class="mb-3" v-for="(post, $index) in posts" :key="$index">
      <h3 class="text-xl">{{post.content.title}}</h3>

      <nuxt-link :to="postLink(post)">
        <p>{{ postExcerpt(post.content) }}</p>
      </nuxt-link>
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
        return post.content.substring(0, 255) + "...";
      },
      postLink(post) {
        return `/posts/${post.slug}`;
      },
    },
  };
</script>
