<template>
  <div class="container">
    <Article
      title="Kom jij ons team versterken?"
      image="home/2.jpg"
      :is-h1="true"
    >
      <p>Ben je geïnteresseerd om ons snelgroeiende bedrijf als zzp’er/parttimer te ondersteunen?</p>
      <p>Dit hebben wij jou te bieden</p>
      <ul>
        <li>Leuke collega's</li>
        <li>Uitdagende installaties realiseren</li>
        <li>Rondom de toren werkzaam zijn (nooit ver van huis)</li>
      </ul>

      <nuxt-link class="btn btn-outline-primary" to="/contact">Neem contact met ons op</nuxt-link>
    </Article>
  </div>
</template>

<script>
import Article from '../components/article'

export default {
  name: 'vacatures',
  components: {
    Article
  }
}
</script>

<style scoped>

</style>
