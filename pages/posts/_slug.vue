<template>
  <div>
      <h1 class="text-2xl mb-3">
          {{ story.content.title }}
      </h1>
      <p v-if="$store.state.user">{{ story.content.content }} </p>
      <p v-else>Please login to access the content</p>
  </div>
</template>
<script>
  export default {
    name: "PostPage",
    asyncData(context) {
      let version =
        context.query._storyblok || context.isDev ? "draft" : "published";
      return context.app.$storyapi
        .get(`cdn/stories/posts/${context.params.slug}`, {
          version
        })
        .then((res) => {
          return res.data;
        })
        .catch((res) => {
          if (!res.response) {
            console.error(res);
            context.error({
              statusCode: 404,
              message: "Failed to receive content form api",
            });
          } else {
            console.error(res.response.data);
            context.error({
              statusCode: res.response.status,
              message: res.response.data,
            });
          }
        });
    },
  };
</script>
