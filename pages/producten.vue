<template>
  <div class="container">
    <div v-if="panels.length && transformers.length">
      <h1 class="text-secondary mb-3 font-weight-bold">Producten</h1>
      <p class="my-4">
        Hieronder ziet u een greep uit ons assortiment. Heeft u vragen over een specifiek product dan kunt u altijd bij
        ons informeren.
      </p>

      <h2 class="text-secondary mb-4">Panelen:</h2>
      <div class="row">
        <div v-for="panel in (panels)" class="col-md-4 col-lg-3 col-sm-1 mb-4">
          <Product :title="panel.title" :image="panel.image" :download="panel.pdf"></Product>
        </div>
      </div>
      <h2 class="text-secondary mb-4">Omvormers:</h2>
      <div class="row">
        <div v-for="panel in transformers" class="col-md-4 col-lg-3 col-sm-1 mb-4">
          <Product :title="panel.title" :image="panel.image" :download="panel.pdf"></Product>
        </div>
      </div>
    </div>
        <div v-if="!panels.length && !transformers.length" class="d-flex justify-content-center">
          <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
  </div>
</template>

<script>
  import product from '~/components/product'
  import { config } from '~/exports/config'

  export default {
    name: 'producten',
    components: {
      product
    },
    async fetch() {
      this.panels = await fetch(`${config.api}/products`)
        .then(res => res.json())
        .then(res => res.map(product => product.api))
        .then(res => res.filter(product => product.type === 'panel'))

      this.transformers = await fetch(`${config.api}/products`)
        .then(res => res.json())
        .then(res => res.map(product => product.api))
        .then(res => res.filter(product => product.type === 'transformer'))
    },
    data: function() {
      return {
        panels: [],
        transformers: []
      }
    }
  }
</script>

<style scoped>

</style>
