<template>
  <div class="container">
    <div v-if="!project" class="d-flex justify-content-center">
      <div class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-if="project">
      <h1 class="text-secondary mb-3 font-weight-bold">{{project.title}}</h1>
      <div class="my-4" v-html="project.description"></div>
      <CoolLightBox
        :items="project.images"
        :index="index"
        @close="index = null">
      </CoolLightBox>

      <h3 class="text-secondary mb-3">Foto's van dit project</h3>
      <div class="row">
        <div class="col-md-4 col-sm-6 col-lg-3 mb-3"
             v-for="(image, imageIndex) in project.images">
          <div
            class="image"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{backgroundImage: `url('${image}')`}"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CoolLightBox from 'vue-cool-lightbox'
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
  import { config } from '~/exports/config'

  export default {
    name: '_project',
    components: {
      CoolLightBox
    },
    data: function() {
      return {
        index: null,
        project: null
      }
    },
    async fetch() {
      this.project = await fetch(`${config.api}/projects?slug=${this.$route.params.project}`)
        .then(res => res.json())
        .then(res => res.map(project => {
          return {
            slug: project.slug,
            title: project.acf.title,
            description: project.acf.description,
            images: project.acf.images.map(img => this.srcString(img.medium_srcset)),
            thumbnail: project.acf.thumbnail,
            type: project.acf.type
          }
        }))
        .then(res => res.filter(project => project.type === 'pk-solar'))
        .then(res => res[0])
    },
    methods: {
      srcString(string) {
        const arr = string.split(',')
        const url = arr[1].slice(0, -6)
        return url
      }
    }
  }
</script>

<style lang="scss">
  @import '../../node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

  .image {
    height: 200px;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: .2s;

    &:hover {
      opacity: .7;
    }
  }
</style>
