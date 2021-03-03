<template>
  <div class="container">
    <Article
      title="Voordelen"
      image="advantages/1.jpg"
      :is-h1="true"
    >
      <p>Zonnepanelen brengen vele voordelen met zich mee. Of u nu opzoek bent naar panelen voor particulier of zakelijk
        gebruik of gewoon wil weten hoe panelen werken; u vindt hier een uitgebreide uitleg. Aarzel niet om bij meer
        vragen contact met ons op te nemen!</p>
    </Article>
    <Article
      title="Stroom besparen"
      :reverse="true"
      image="advantages/2.jpg"
    >
      <p>Door te kiezen voor zonnepanelen zult u enorm besparen op uw energiekosten en ook draagt u bij aan een schoner
        milieu. Zodra uw zonnepaneel systeem actief is en kilowatturen (kWh) opwekt, hoeft u deze energie niet meer in
        te kopen bij uw gewone
        energieleverancier. Hierdoor gaat u maandelijks besparen op uw energierekening. Nadat u de investering heeft
        terug
        verdiend zult u daarna profiteren van gratis stroom. De terugverdien tijd ligt voor de particulieren tussen de 5
        a 8 jaar.</p>
    </Article>

    <Article
      title="Investeren"
      :reverse="false"
      image="advantages/3.jpg"
    >
      <p>Nog een belangrijke overweging voor de lange termijn is de investering die u in uw woning doet. Wanneer u
        uw woning van eigen energie behoefte voorziet, is dat een plus punt ten opzichte van uw woning die afhankelijk
        is van een energieleverancier. Verder is het eventueel mogelijk subsidie aan te vragen op zowel landelijk als
        provinciaal niveau. Particulieren kunnen
        eventueel de lopende subsidie aanvragen via AgentschapNL.</p>

      <div class="mb-3">
        <a
          href="https://www.rijksoverheid.nl/actueel/nieuws/2019/04/26/salderingsregeling-verlengd-tot-2023#:~:text=De%20salderingsregeling%20voor%20zonnepanelen%20wordt%20tot%201%20januari%202023%20ongewijzigd%20voortgezet.&text=Eigenaren%20van%20zonnepanelen%20kunnen%20drie,voor%20wie%20al%20zonnepanelen%20heeft."
          class="btn btn-secondary" target="_blank">Info Salderingsregeling</a>
      </div>
      <div class="mb-3">
        <a
          href="https://www.rijksoverheid.nl/actueel/nieuws/2021/01/14/subsidieaanvragen-voor-zonnepanelen-in-trek-tijdens-eerste-openstellingsronde-sde"
          class="btn btn-secondary" target="_blank">Info subsidie aanvragen</a>
      </div>
      <div class="mb-3">
        <a
          href="https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/content/btw-terugvragen-voor-zonnepanelen-ik-ben-particulier#:~:text=Vanaf%20het%20jaar%20dat%20volgt,dus%20g%C3%A9%C3%A9n%20btw%20meer%20terugvragen"
          class="btn btn-secondary" target="_blank">BTW teruvragen?</a>
      </div>
    </Article>


    <Article
      title="Hoe werken zonnepanelen?"
      image="advantages/4.jpg"
      :reverse="true"
    >
      <p>Zonnepanelen maken op het dak van uw woning elektriciteit. Dat kunnen ze doordat zonlicht
        elektrische spanning opwekt tussen de twee laagjes silicium die op een paneel zitten. Dat heet een
        fotovoltaische
        reactie. Om deze spanning om te zetten naar bruikbare stroom, zijn behalve panelen ook een omvormer en
        elektriciteitskabels nodig. Voor
        het opwekken van stroom hebben zonnepanelen niet perse direct zonlicht nodig. Ook op een bewolkte dag levert een
        zonnecel elektriciteit.</p>
    </Article>

    <Article
      title="Berekenen"
      image="advantages/5.jpg"
    >
      <p>Net als bij alle elektrische appareten staat ook het vermogen van zonnepanelen uitgedrukt in watt. De productie
        van elektriciteit is niet gelijkmatig doordat de hoeveelheid zonlicht steeds verandert. Daarom staat bij
        zonnepanelen het maximale vermogen aangegeven: watt-piek (wp). Bij het berekenen van de wekelijkse opbrengst,
        gebruiken installateurs tabellen om de waarden voor Nederlandse omstandigheden te combineren met de hellingshoek
        en windrichting van het paneel.</p>
    </Article>

    <Article
      title="Onderhoud"
      image="advantages/6.jpg"
      :reverse="true"
    >
      Zonnepanelen vragen
      weinig onderhoud: maak de panelen elk half jaar schoon, om vogelpoep, algenaanslag en stof te verwijderen. En let
      op de omvormer, houd deze schoon, want de omvormer is gevoelig voor warmte en stofvorming.
    </Article>


  </div>
</template>

<script>
import Article from '../components/article'

export default {
  name: 'voordelen',
  head: {
    title: 'De voordelen van zonnepanelen | PK solarpower'
  },
  components: {
    Article
  }
}
</script>

<style scoped>

</style>
