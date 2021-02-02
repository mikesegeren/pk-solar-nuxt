<template>
  <div>
    <Navbar></Navbar>
    <Header></Header>
    <div class="container">
      <Nuxt/>
    </div>
    <Footer></Footer>
  </div>
</template>

<style>
  body {
    background: #f8f8f8;
  }
</style>
<script>
  import Header from '../components/header'
  import Navbar from '../components/navbar'
  import Footer from '~/components/footer'

  export default {
    components: { Footer, Navbar, Header }
  }
</script>
