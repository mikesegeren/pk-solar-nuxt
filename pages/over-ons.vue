<template>
  <div class="container">
    <Article
      title="Over ons"
      image="home/1.jpg"
    >
      <p>Wij zijn sinds 2010 actief in de zonnepanelen als PK-solarpower bv. Wat doen wij voor u:</p>
      <ul>
        <li>Vrijblijvende offerte</li>
        <li>Waar nodig ook een constructie berekening van uw dak</li>
        <li>Reëel terug verdien schema’s uitgewerkt overzichtelijk aangeleverd</li>
        <li>Onze monteurs komen uw PV installatie op maat in meten voordat u de definitieve opdracht verstrekt</li>
        <li>Terug verdientijd tussen de 5 a 8 jaar</li>
      </ul>
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
