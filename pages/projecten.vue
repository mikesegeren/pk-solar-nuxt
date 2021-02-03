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
            <p class="card-text">{{getShortDescription(project.description)}}</p>
            <nuxt-link :to="project.slug" class="btn btn-outline-secondary w-100">Meer informatie</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { projects } from '~/exports/projects'

  export default {
    name: 'projecten',
    data: function() {
      return {
        projects: projects
      }
    },
    methods: {
      getBackgroundImage(project) {
        return `url('/images/projects/${project.slug}/thumbnail.jpg')`
      },
      getShortDescription(description) {
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
  }
</style>
