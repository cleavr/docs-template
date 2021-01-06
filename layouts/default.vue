<template>
  <div class="max-w-6xl mx-auto">
    <transition
      enter-active-class="transition-opacity ease-linear duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-300"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <MobileMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
    </transition>
    <MainHeader @showMobileMenu="showMobileMenu = true" v-show="!showMobileMenu" />
    <div class="h-screen flex">
      <DesktopSidebar class="hidden md:flex" />
      <Nuxt class="mt-24 px-6" />
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  watch: {
    '$route' () {
      this.showMobileMenu = false
    }
  },
  data () {
    return {
      showMobileMenu: false
    }
  }
}
</script>

<style>
  .prose code {
    color: orange;
  }
  .prose a {
    color: #2563EB;
    text-decoration: none;
  }

  .prose a:hover {
    color: #3B82F6;
    text-decoration: none;
  }
</style>
