<template>
  <div class="container">
    <h1 class="text-secondary mb-3 font-weight-bold">Welkom bij PK-solarpower</h1>
    <p class="my-4">
      Zonnepanelen zijn populairder dan ooit tevoren. Niet verwonderlijk overigens gezien de zichtbare win-winsituatie.
      Zo staan zij garant voor een aanzienlijke besparing op de energiekosten, wat fijn is voor de eigen portemonnee
      terwijl u tegelijkertijd ook nog eens een positieve bijdrage levert aan een schoner milieu.
    </p>
    <p class="my-4">
      Wij zijn sinds 2010 actief in de zonnepanelen. Bekijk hier ons assortiment, lees over de
      voordelen van onze panelen en neem contact met ons op!
    </p>

    <div class="row d-flex flex-wrap">
      <div class="col-md-4 d-flex flex-column flex-grow-1 mb-3">
        <div class="card d-flex flex-grow-1">
          <div class="card-body d-flex flex-column overflow-hidden">
            <div class="img-wrap">
              <img src="/images/home-article-1.png" alt="">
            </div>
            <h2 class="text-secondary mt-3 mt-lg-5">Wat doen wij?</h2>
            <ul>
              <li>Vrijblijvende offerte</li>
              <li>Waar nodig ook een constructieberekening van uw dak</li>
              <li>Reële terugverdienschema’s uitgewerkt, overzichtelijk aangeleverd</li>
              <li>Terugverdientijd tussen de 5 en 8 jaar</li>
            </ul>
            <nuxt-link to="/over-ons" class="btn btn-lg btn-outline-primary w-100 align-self-end">Lees meer</nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex flex-column flex-grow-1 mb-3">
        <div class="card d-flex flex-grow-1">
          <div class="card-body d-flex flex-column">
            <div class="img-wrap">
              <img src="/images/home-article-2.png" alt="">
            </div>
            <h2 class="text-secondary mt-3 mt-lg-5">Voordelen</h2>
            <p>
              Door te kiezen voor zonnepanelen zult u enorm besparen op uw energiekosten. Ook draagt u bij aan een
              schoner milieu. Voor veel mensen is dit een belangrijke overweging om te
              investeren in zonnepanelen.
            </p>
            <nuxt-link to="/voordelen" class="btn btn-lg btn-outline-primary w-100 align-self-end align-content-end">
              Lees meer
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex flex-column flex-grow-1 mb-3">
        <div class="card d-flex flex-grow-1">
          <div class="card-body d-flex flex-column">
            <div class="img-wrap text-center overflow-hidden">
              <img src="/images/home-article-3.png" alt="">
            </div>
            <h2 class="text-secondary mt-3 mt-lg-5">Contact</h2>
            <p>
              Neem hier contact met ons op, of laat ons contact met u opnemen. Stuur ons een e-mail.
            </p>
            <nuxt-link to="/contact" class="btn btn-lg btn-outline-primary w-100 align-self-end">Lees meer</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
@import "styles/variables";
@import "node_modules/bootstrap/scss/mixins";

.card {
  .img-wrap {
    height: 200px;
    text-align: center;
  }

  img {
    max-width: 100%;
  }

  p, ul {
    @include media-breakpoint-up(lg) {
      min-height: 200px;
    }
  }
}
</style>
