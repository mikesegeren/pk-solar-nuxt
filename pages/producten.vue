<template>
  <div>
    <h1 class="text-secondary mb-3 font-weight-bold">Producten</h1>
    <p class="my-4">
      Hieronder ziet u een greep uit ons assortiment. Heeft u vragen over een specifiek product dan kunt u altijd bij
      ons informeren.
    </p>

    <h2 class="text-secondary">Panelen:</h2>
    <div class="row">
      <div v-for="panel in panels" class="col-md-4 col-lg-3 col-sm-1 mb-4">
        <Product :title="panel.title" :image="panel.image" :download="panel.download"></Product>
      </div>
    </div>
    <h2 class="text-secondary">Omvormers:</h2>
    <div class="row">
      <div v-for="panel in transformers" class="col-md-4 col-lg-3 col-sm-1 mb-4">
        <Product :title="panel.title" :image="panel.image" :download="panel.download"></Product>
      </div>
    </div>
  </div>
</template>

<script>
  import {type} from '~/exports/product-type-enum';
  import {products} from '~/exports/products';
  import product from '~/components/product'

  export default {
    name: 'producten',
    components: {
      product
    },
    data: function() {
      return {
        panels: products.filter(product => product.type === type.panel),
        transformers: products.filter(product => product.type === type.transformer),
      }
    }
  }
</script>

<style scoped>

</style>
