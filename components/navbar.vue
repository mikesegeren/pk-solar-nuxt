<template>
  <div class="nav-bar py-4">
    <div class="d-flex align-items-center justify-content-between container">
      <img class="logo" src="images/logo.png" alt="">
      <div class="nav-items">
        <nuxt-link v-for="item in navItems" class="nav-item px-2" :to="item.route" :key="item.name"
                   active-class="active">
          {{ item.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { navItems } from '~/exports/menu-items'

  export default {
    name: 'navbar',
    data: function() {
      return {
        navItems: navItems
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";

  .logo {
    width: 180px;
  }

  .nav-item {
    &.nuxt-link-exact-active {
      font-weight: 700;
      color: $primary;
    }
  }
</style>
