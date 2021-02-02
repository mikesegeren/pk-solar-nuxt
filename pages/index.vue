<template>
  <div>
    <h1 class="text-secondary mb-3 font-weight-bold">Welkom bij PK-solarpower</h1>
    <p class="my-4">
      Wij zijn sinds 2010 actief in de zonnepanelen als PK-solarpower bv. Bekijk hier ons assortiment, leer over de
      voordelen van onze panelen en neem contact met ons op!
    </p>

    <div class="row d-flex flex-wrap">
      <div class="col-md-4 d-flex flex-column flex-grow-1">
        <div class="card d-flex flex-grow-1">
          <div class="card-body d-flex flex-column overflow-hidden">
            <div class="img-wrap">
              <img src="images/home-article-1.png" alt="">
            </div>
            <h2 class="text-secondary mt-3">Wie wij zijn</h2>
            <h4>Wat doen wij voor u?</h4>
            <ul>
              <li>Vrijblijvende offerte</li>
              <li>Waar nodig ook een constructie berekening van uw dak</li>
              <li>Reëel terug verdien schema’s uitgewerkt overzichtelijk aangeleverd</li>
              <li>Terug verdientijd tussen de 2 a 8 jaar</li>
            </ul>
            <div class="btn btn-lg btn-outline-primary w-100 align-self-end">Lees meer</div>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex flex-column flex-grow-1">
        <div class="card d-flex flex-grow-1">
          <div class="card-body d-flex flex-column">
            <div class="img-wrap">
              <img src="images/home-article-2.png" alt="">
            </div>
            <h2 class="text-secondary mt-3">Voordelen</h2>
            <p>
              De voordelen van zonnepanelen Door te kiezen voor zonnepanelen zult u enorm besparen op uw energiekosten
              en ook draagt u bij aan een schoner milieu. Voor veel mensen is dit een belangrijke overweging om te
              investeren in zonnepanelen.
            </p>
            <div class="btn btn-lg btn-outline-primary w-100 align-self-end align-content-end">Lees meer</div>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex flex-column flex-grow-1">
        <div class="card d-flex flex-grow-1">
          <div class="card-body d-flex flex-column">
            <div class="img-wrap">
              <img src="images/home-article-3.png" alt="">
            </div>
            <h2 class="text-secondary mt-3">Contact</h2>
            <p>
              Neem hier contact met ons op, of laat ons contact met jou opnemen. Stuur ons een bericht of laat je
              email/telefoonnummer achter.
            </p>
            <div class="btn btn-lg btn-outline-primary w-100 align-self-end">Lees meer</div>
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

<style lang="scss">
  .card {
    .img-wrap {
      height: 200px;
    }

    img {
      max-width: 100%;
    }
  }
</style>
