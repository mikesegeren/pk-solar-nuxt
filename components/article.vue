<template>
  <div :class="{'flex-row-reverse': reverse}" class="row align-items-center py-0 py-lg-5">
    <div :class="{'pr-lg-5': !reverse, 'pl-lg-5': reverse}" class="col-lg-7 col-md-12 pr-0 pl-0 col-sm-12">
      <h1 v-if="isH1" class="text-secondary mb-3 font-weight-bold">{{title}}</h1>
      <h2 v-if="!isH1" class="text-secondary mb-3 font-weight-bold">{{title}}</h2>
      <p v-for="paragraph in paragraphs">{{paragraph}}</p>
      <ul v-if="bullets">
        <li v-for="bullet in bullets">{{bullet}}</li>
      </ul>
    </div>
    <div class="col-md-5 d-none d-lg-block">
      <div :style="{backgroundImage: `url('/images/articles/${image}')`}" class="article-image"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'article',
    props: {
      title: String,
      paragraphs: Array,
      image: String,
      bullets: {
        type: Array,
        required: false
      },
      reverse: {
        type: Boolean,
        default: false,
        required: false
      },
      isH1: {
        type: Boolean,
        default: false,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .article-image {
    background-size: cover;
    background-position: center center;
    height: 0;
    padding-bottom: 100%;
  }

  h2 {
    font-size: 2.5rem;
  }
</style>
