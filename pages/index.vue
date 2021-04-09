<template>
  <div>
    <h1 class="text-2xl">Published posts:</h1>
    <PostList class="mt-3" :posts="stories" />
  </div>
</template>
<script>
  import PostList from "../components/PostList.vue";
  export default {
    name: "Index",
    components: {
      PostList,
    },
    asyncData(context) {
      let version =
        context.query._storyblok || context.isDev ? "draft" : "published";
      return context.app.$storyapi
        .get("cdn/stories", {
          version,
          starts_with: 'posts/'
        })
        .then((res) => {
          console.log(res.data)
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
