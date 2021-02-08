<template>
  <div class="bg-light p-3 text-center rounded">
    <img :src="image" alt="">
    <h4 class="text-secondary font-weight-bold mt-2">{{title}}</h4>
    <a :href="download" target="_blank" class="btn btn-outline-secondary w-100 mt-2">Meer info</a>
  </div>
</template>

<script>
  export default {
    name: 'product',
    props: {
      title: String,
      download: String,
      image: String
    }
  }
</script>

<style lang="scss" scoped>
  img {
    height: 200px;
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }
</style>
