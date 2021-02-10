<template>
  <div class="container">
    <div v-if="projects.length">
      <h1 class="text-secondary mb-3 font-weight-bold">Projecten</h1>
      <p class="my-4">
        Hieronder ziet u een selectie uit de projecten die wij door de jaren heen gedaan hebben.
      </p>

      <div class="row">
        <div v-for="project in projects" class="col-md-4 col-sm-6 col-lg-3">
          <div class="card">
            <div :style="{backgroundImage: getBackgroundImage(project)}" class="img"></div>
            <div class="card-body">
              <h5 class="card-title">{{project.title}}</h5>
              <div class="card-text my-3" v-html="project.description"></div>
              <nuxt-link :to="'/projecten/' + project.slug" class="btn btn-outline-secondary w-100">Meer informatie</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!projects.length" class="d-flex justify-content-center">
      <div class="spinner-border text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { config } from '~/exports/config'

  export default {
    name: 'projecten',
    data() {
      return {
        projects: []
      }
    },
    async fetch() {
      this.projects = await fetch(`${config.api}/projects`)
        .then(res => res.json())
        .then(res => res.map(project => {
          return {
            slug: project.slug,
            title: project.api.title,
            description: project.api.description,
            images: project.api.images,
            thumbnail: project.api.thumbnail.sizes.medium,
            type: project.api.type
          }
        }))
        .then(res => res.filter(project => project.type === 'pk-solar'))
    },
    methods: {
      getBackgroundImage(project) {
        return `url('${project.thumbnail}')`
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/variables";

  .card {
    overflow: hidden;

    .img {
      height: 190px;
      background-size: cover;
      background-position: center;
    }

    .card-text {
      min-height: 72px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
</style>
