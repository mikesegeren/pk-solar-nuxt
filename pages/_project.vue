<template>
  <div>
    <h1 class="text-secondary mb-3 font-weight-bold">{{project.title}}</h1>
    <p class="my-4">{{project.description}}</p>
    <CoolLightBox
      :items="imagesToArray()"
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <h1 class="text-secondary mb-3">Foto's van dit project</h1>
    <div class="row">
      <div class="col-md-4 col-sm-6 col-lg-3"
           v-for="(image, imageIndex) in project.images">
        <div
          class="image"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{backgroundImage: `url('/images/projects/${$route.params.project}/${image}')`}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
  import CoolLightBox from 'vue-cool-lightbox'
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
  import { projects } from '~/exports/projects'

  export default {
    name: '_project',
    components: {
      CoolLightBox
    },
    data: function() {
      return {
        index: null,
        project: projects.find(project => {
          return project.slug === this.$route.params.project
        })
      }
    },
    methods: {
      imagesToArray() {
        const project = projects.find(project => project.slug === this.$route.params.project)
        return project.images.map(img => `/images/projects/${this.$route.params.project}/${img}`)
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

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
