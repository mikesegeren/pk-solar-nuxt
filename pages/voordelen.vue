<template>
  <div class="container">
    <Article
      title="Voordelen"
      :paragraphs="[
        `Zonnepanelen brengen vele voordelen met zich mee. Of u nu opzoek bent naar panelen voor particulier gebruik,
      zakelijk gebruik of gewoon wil weten hoe panelen werken; u vindt hier een uitgebreide uitleg. Aarzel niet om bij
      meer vragen contact met ons op te nemen!`
      ]"
      image="home/1.jpg"
    ></Article>
    <Article
      title="Waarom?"
      :paragraphs="[
        `
      Door te kiezen voor zonnepanelen zult u enorm besparen op uw energiekosten en ook draagt u bij aan een schoner
      milieu. Voor veel mensen is dit een belangrijke overweging om te investeren in zonnepanelen. Zodra uw zonnepaneel
      systeem actief is en kilowatturen (kWh) opwekt, hoeft u deze energie niet meer in te kopen bij uw gewone
      energieleverancier. Hierdoor gaat u maandelijks besparen op uw energierekening. Nadat u de investering heeft terug
      verdiend zult u daarna profiteren van gratis stroom. De terugverdien tijd ligt voor de particulieren tussen de 8 a
      10 jaar. Nog een belangrijke overweging voor de lange termijn is de investering die u in uw woning doet. Wanneer u
      uw woning van eigen energie behoeft voorziet, is dat een plus punt ten opzichte van uw woning die onafhankelijke
      is van een energieleverancier. Want de energie prijzen zullen de komende jaren alleen maar stijgen. Het kan nog
      aantrekkelijker zijn om te kiezen voor zonnepanelen. Dit omdat er een landelijke subsidie kan zijn voor
      zonnepanelen per woning. Ook worden er subsidies geven door sommige provincies en gemeentes. Particulieren kunnen
      eventueel de lopende subsidie aanvragen via AgentschapNL ook voor meer informatie kijken op deze site.
    `
      ]"
      :reverse="true"
      image="home/2.jpg"
    ></Article>
    <Article
      title="Hoe werken zonnepanelen?"
      :paragraphs="[
        `
      Zonnepanelen maken op het dak van uw woning, boot,caravan elektriciteit. Dat kunnen ze doordat zonlicht
      elektrische spanning opwekt tussen de twee laagjes silicium die op een paneel zitten. Dat heet een fotovoltaische
      reactie (in het engels Photo voltaic, vandaar PV-systeem). Om deze spanning om te zetten naar gebruikbare
      wisselstroom voor het elektriciteitnet, zijn behalve panelen ook een omvormer en elektriciteitskabels nodig. Voor
      het opwekken van stroom hebben zonnepanelen niet perse direct zonlicht nodig. Ook op een bewolkte dag levert een
      zonnecel elektriciteit. Watt-piek Net als bij alle elektrische appareten staat ook het vermogen van zonnepanelen
      uitgedrukt in watt. De productie van elektriciteit is niet gelijkmatig doordat de hoeveelheid zonlicht steeds
      verandert. Daarom staat bij zonnepanelen het maximale vermogen aangegeven: watt-piek (wp). In een testomgeving met
      onveranderlijke omstandigheden voor licht en temperatuur (Standaard Test Condities) is die gemeten. Bij het
      berekenen van de wekelijkse opbrengst, gebruiken installateurs tabellen om de waarden voor Nederlandse
      omstandigheden te combineren met de hellingshoek en windrichting van het paneel. Onderhoud Zonnepanelen vragen
      weinig onderhoud: maak de panelen elk half jaar schoon, om vogelpoep,algenaanslag en stof te verwijderen. En let
      op de omvormer, houdt deze schoon, want de omvormer is gevoelig voor warmte en stofvorming Controleer of er in de
      loop van de tijd geen schaduw gevende objecten zijn bijgekomen.
    `
      ]"
      image="home/1.jpg"
    ></Article>
  </div>
</template>

<script>
  import Article from '../components/article'

  export default {
    name: 'voordelen',
    components: {
      Article
    }
  }
</script>

<style scoped>

</style>
