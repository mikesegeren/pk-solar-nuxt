<template>
  <div class="nav-bar bg-light py-4">
    <div class="d-flex align-items-center justify-content-between container">
      <nuxt-link to="/">
        <img class="logo" src="/images/logo.png" alt="">
      </nuxt-link>
      <div class="nav-items d-none d-md-block">
        <nuxt-link v-for="item in navItems" class="nav-item px-2" :class="[item.name]" :to="item.route" :key="item.name"
                   active-class="active">
          {{ item.name }}
        </nuxt-link>
      </div>

      <div @click="toggleMenu()" :class="{active: showMenu}"
           class="mobile-menu-trigger d-block d-md-none"></div>
      <div v-if="showMenu" class="mobile-menu bg-light px-3 w-50">
        <div @click="toggleMenu()" class="d-flex flex-column">
          <nuxt-link v-for="item in navItems" class="nav-item px-2 border-bottom py-2" :class="[item.name]"
                     :to="item.route" :key="item.name"
                     active-class="active">
            {{ item.name }}
          </nuxt-link>
        </div>
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
        navItems: navItems,
        showMenu: false
      }
    },
    methods: {
      toggleMenu() {
        this.showMenu = !this.showMenu
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/variables";

  @keyframes menu-slide {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .mobile-menu-trigger {
    width: 20px;
    height: 20px;
    z-index: 10;
    position: relative;
    background-image: url("/images/menu-open.svg");
    background-size: contain;
    background-repeat: no-repeat;

    &.active {
      background-image: url("/images/menu-closed.svg");
    }
  }

  .mobile-menu {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    z-index: 9;
    padding-top: 120px;
    animation: .5s menu-slide;
  }

  .logo {
    width: 180px;
  }

  .nav-item {
    &.nuxt-link-exact-active {
      font-weight: 700;
      color: $primary;
    }

    &.active {
      &.projecten {
        font-weight: 700;
        color: $primary;
      }
    }
  }


</style>
