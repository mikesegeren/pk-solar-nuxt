<template>
  <div class="container">
    <Article
      title="Over ons"
      image="home/1.jpg"
    >
      <p>Kwaliteit, transparantie en vakmanschap zijn in het hele traject leidend. Vanaf het eerste contact waar de
        opties besproken worden tot aan de daadwerkelijke montage en plaatsing van de volledige installatie (van het dak
        tot aan de meterkast). Grote kracht van PK-solarpower is verder het voortdurend denken in mogelijkheden. ‘Nee’
        of ‘kan niet’ zult u hier zelden horen.</p>
    </Article>

    <Article
      title="Kwaliteit"
      image="home/2.jpg"
      :reverse="true"
      :is-h1="true"
    >
      <p>PK solarpower maakt alleen gebruik van de kwalitatief hoogwaardige zonnepanelen met een lage warmte coëfficiënt
        en plus tolerantie. Ook monteren en plaatsen wij de gehele installatie van het dak tot aan de meterkast.</p>
      <p>Ook heeft PK-solarpower scherpe prijzen voor de particulieren. Dus mocht u interesse hebben in zonne- energie
        neem contact op met Patrick Stoop.</p>
    </Article>
  </div>
</template>

<script>
import Article from '../components/article'

export default {
  name: 'about',
  head: {
    title: 'Over PK solarpower | PK solarpower'
  },
  components: {
    Article
  }
}
</script>

<style scoped>
</style>
