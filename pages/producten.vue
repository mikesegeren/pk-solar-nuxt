<template>
  <div>
    <h1 class="text-secondary mb-3 font-weight-bold">Producten</h1>
    <p class="my-4">
      Hieronder ziet u een greep uit ons assortiment. Heeft u vragen over een specifiek product dan kunt u altijd bij
      ons informeren.
    </p>

    <h2 class="text-secondary">Panelen:</h2>
    <div class="row">
      <div v-for="panel in (panels)" class="col-md-4 col-lg-3 col-sm-1 mb-4">
        <Product :title="panel.title" :image="panel.image" :download="panel.pdf"></Product>
      </div>
    </div>
    <h2 class="text-secondary">Omvormers:</h2>
    <div class="row">
      <div v-for="panel in transformers" class="col-md-4 col-lg-3 col-sm-1 mb-4">
        <Product :title="panel.title" :image="panel.image" :download="panel.pdf"></Product>
      </div>
    </div>
  </div>
</template>

<script>
  import { type } from '~/exports/product-type-enum'
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
        .then(res => res.map(product => product.acf))
        .then(res => res.filter(product => product.type === 'panel'))

      this.transformers = await fetch(`${config.api}/products`)
        .then(res => res.json())
        .then(res => res.map(product => product.acf))
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
