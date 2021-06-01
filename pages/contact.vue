<template>
  <div class="container">
    <h1 class="text-secondary mb-3 font-weight-bold">Contact</h1>
    <p class="my-4">
      Bent u geïnteresseerd in zonne-energie? Neem dan vandaag nog contact met ons op. Wij garanderen u:
    </p>
    <ul>
      <li>Vrijblijvende offerte</li>
      <li>Waar nodig ook een constructieberekening van uw dak</li>
      <li>Reële terugverdienschema’s; uitgewerkt en overzichtelijk aangeleverd</li>
      <li>Terugverdientijd tussen de 2 en 8 jaar</li>
    </ul>
    <p class="my-4">
      Aan de hand van onderstaande gegevens kunnen wij u een offerte aanbieden. Wanneer u die goedkeurt, komt de monteur
      – die het systeem gaat installeren – altijd bij u langs om te kijken.
    </p>

    <form action="/success" netlify data-netlify="true" name="contact" id="contact" method="post">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="email">E-mailadres:</label>
            <input type="email" class="form-control" name="email" id="email" placeholder="E-mailadres">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="name">Voor- en achternaam:</label>
            <input type="text" class="form-control" name="Naam" id="name" placeholder="Voor- en achternaam">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="message">Bericht</label>
            <textarea placeholder="Bericht" class="form-control" name="Bericht" id="message"></textarea>
          </div>
        </div>
      </div>

      <button type="submit" value="Submit" form="contact" class="btn btn-secondary w-100 btn-lg">Verstuur</button>
    </form>

    <div class="row mt-3">
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body text-center">
            <img src="/images/adress.svg" alt="" class="icon mb-3">
            <h4>Drimmelenseweg 17, Made</h4>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body text-center">
            <img src="/images/mail.svg" alt="" class="icon mb-3">
            <h4>info@pk-solarpower.eu</h4>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body text-center">
            <img src="/images/phone.svg" alt="" class="icon mb-3">
            <h4>+31 6 290 412 25</h4>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import FormControl from '~/components/form-control'

export default {
  name: 'contact',
  head: {
    title: 'Neem contact met ons op | PK solarpower'
  },
  components: { FormControl }
}
</script>

<style lang="scss" scoped>
img.icon {
  max-width: 50px;
}

textarea {
  resize: none;
  height: 200px;
}
</style>
