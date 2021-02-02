<template>
  <div>
    <h1 class="text-secondary mb-3 font-weight-bold">Contact</h1>
    <p class="my-4">
      Aan de hand van de onderstaande gegevens kunnen wij u een offerte aanbieden. Als u aangeeft interesse te hebben
      komt onze installateur bij u op bezoek om te kijken of er nog bijzonderheden zijn
    </p>

    <form name="contact" method="POST" action="/success" data-netlify="true">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="email">Emailadres:</label>
            <input type="email" class="form-control" name="email" id="email" placeholder="Email">
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="name">Voor en achternaam:</label>
            <input type="text" class="form-control" name="Naam" id="name" placeholder="Voor en achternaam">
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

      <button class="btn btn-secondary w-100 btn-lg" type="submit">Verstuur</button>
    </form>

    <div class="row mt-3">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body text-center">
            <img src="/images/adress.svg" alt="" class="icon mb-3">
            <h4>Drimmelenseweg 17, Made</h4>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body text-center">
            <img src="/images/mail.svg" alt="" class="icon mb-3">
            <h4>info@pk-solarpower.eu</h4>
          </div>
        </div>
      </div>
      <div class="col-md-4">
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
    components: { FormControl }
  }
</script>

<style lang="scss" scoped>
  img.icon {
    max-width: 50px;
  }

  textarea {
    resize: none;
  }
</style>
