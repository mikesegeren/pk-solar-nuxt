<template>
  <div>
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
            <div class="card-text my-3" v-html="getShortDescription(project.description)"></div>
            <nuxt-link :to="project.slug" class="btn btn-outline-secondary w-100">Meer informatie</nuxt-link>
          </div>
        </div>
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
            title: project.acf.title,
            description: project.acf.description,
            images: project.acf.images,
            thumbnail: project.acf.thumbnail,
            type: project.acf.type
          }
        }))
        .then(res => res.filter(project => project.type !== 'pksolar'))
    },
    methods: {
      getBackgroundImage(project) {
        return `url('${project.thumbnail}')`
      },
      getShortDescription(description) {
        description = description.replaceAll('<p>', '').replaceAll('</p>', '')
        return `${description.slice(0, 50)}...`
      }
    }
  }
</script>

<style lang="scss">
  @import "styles/variables";

  .card {
    overflow: hidden;

    .img {
      height: 190px;
      background-size: cover;
      background-position: center;
    }

    .card-text {
      min-height: 48px;
    }
  }
</style>
