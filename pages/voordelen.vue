<template>
  <div class="container">
    <Article
      title="Voordelen"
      :paragraphs="[
        `Zonnepanelen brengen vele voordelen met zich mee. Of u nu opzoek bent naar panelen voor particulier of zakelijk gebruik of gewoon wil weten hoe panelen werken; u vindt hier een uitgebreide uitleg. Aarzel niet om bij meer vragen contact met ons op te nemen!`
      ]"
      image="advantages/1.jpg"
      :is-h1="true"
    ></Article>
    <Article
      title="Stroom besparen"
      :paragraphs="[
      `Door te kiezen voor zonnepanelen zult u enorm besparen op uw energiekosten en ook draagt u bij aan een schoner
      milieu. Zodra uw zonnepaneel systeem actief is en kilowatturen (kWh) opwekt, hoeft u deze energie niet meer in te kopen bij uw gewone
      energieleverancier. Hierdoor gaat u maandelijks besparen op uw energierekening. Nadat u de investering heeft terug
      verdiend zult u daarna profiteren van gratis stroom. De terugverdien tijd ligt voor de particulieren tussen de 8 a
      10 jaar.`
      ]"
      :reverse="true"
      image="advantages/2.jpg"
    ></Article>

    <Article
      title="Investeren"
      :paragraphs="[
      `Nog een belangrijke overweging voor de lange termijn is de investering die u in uw woning doet. Wanneer u
      uw woning van eigen energie behoefte voorziet, is dat een plus punt ten opzichte van uw woning die afhankelijk
      is van een energieleverancier. Verder is het eventueel mogelijk subsidie aan te vragen op zowel landelijk als provinciaal niveau. Particulieren kunnen
      eventueel de lopende subsidie aanvragen via AgentschapNL.`
      ]"
      :reverse="false"
      image="advantages/3.jpg"
    ></Article>


    <Article
      title="Hoe werken zonnepanelen?"
      :paragraphs="[
        `Zonnepanelen maken op het dak van uw woning elektriciteit. Dat kunnen ze doordat zonlicht
      elektrische spanning opwekt tussen de twee laagjes silicium die op een paneel zitten. Dat heet een fotovoltaische
      reactie. Om deze spanning om te zetten naar bruikbare stroom, zijn behalve panelen ook een omvormer en elektriciteitskabels nodig. Voor
      het opwekken van stroom hebben zonnepanelen niet perse direct zonlicht nodig. Ook op een bewolkte dag levert een
      zonnecel elektriciteit.`
      ]"
      image="advantages/4.jpg"
      :reverse="true"
    ></Article>

    <Article
      title="Berekenen"
      :paragraphs="[
        `Net als bij alle elektrische appareten staat ook het vermogen van zonnepanelen uitgedrukt in watt. De productie van elektriciteit is niet gelijkmatig doordat de hoeveelheid zonlicht steeds verandert. Daarom staat bij zonnepanelen het maximale vermogen aangegeven: watt-piek (wp). Bij het berekenen van de wekelijkse opbrengst, gebruiken installateurs tabellen om de waarden voor Nederlandse omstandigheden te combineren met de hellingshoek en windrichting van het paneel.`
      ]"
      image="advantages/5.jpg"
    ></Article>

    <Article
      title="Onderhoud"
      :paragraphs="[
        `Zonnepanelen vragen
      weinig onderhoud: maak de panelen elk half jaar schoon, om vogelpoep, algenaanslag en stof te verwijderen. En let
      op de omvormer, houd deze schoon, want de omvormer is gevoelig voor warmte en stofvorming.`
      ]"
      image="advantages/6.jpg"
      :reverse="true"
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
