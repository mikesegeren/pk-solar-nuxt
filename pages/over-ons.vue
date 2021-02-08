<template>
  <div class="container">
    <Article
      title="Over ons"
      :paragraphs="[
        `Wij zijn sinds 2010 actief in de zonnepanelen als PK-solarpower bv. Wat doen wij voor u:`,
        `Vrijblijvende offerte`,
        `Waar nodig ook een constructie berekening van uw dak`,
        `Reëel terug verdien schema’s uitgewerkt overzichtelijk aangeleverd`,
        `Terug verdientijd tussen de 2 a 8 jaar`,
      ]"
      image="home/1.jpg"
    ></Article>

    <Article
      title="Kwaliteit"
      :paragraphs="[
        `PK solarpower maakt alleen gebruik van de kwalitatief hoogwaardige zonnepanelen met een lage warmte coëfficiënt en plus tolerantie. Ook monteren en plaatsen wij de gehele installatie van het dak tot aan de meterkast.`,
        `Ook heeft PK-solarpower scherpe prijzen voor de particulieren. Dus mocht u interesse hebben in zonne- energie neem contact op met Patrick Stoop.`
      ]"
      image="home/2.jpg"
      :reverse="true"
    ></Article>
  </div>
</template>

<script>
  import Article from '../components/article'

  export default {
    name: 'about',
    components: {
      Article
    }
  }
</script>

<style scoped>
</style>
