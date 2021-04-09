<template>
    <div>
        This is a post page
    </div>
</template>
<script>
    export default {
        name: "PostPage",
        created(){
            console.log(this.$route)
        }
    }
</script>