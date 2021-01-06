<template>
  <div class="fixed flex flex-shrink-0 h-16 w-full max-w-6xl bg-white border-b-2 border-gray-100">
    <!-- TODO Add mobile friendly header -->
    <button class="md:hidden p-6" @click="showMobileMenu">
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <div class="flex-1 px-4 flex items-center justify-between">
      <div class="flex">
        <!-- logo -->
        <logo class="h-5 w-5 hidden md:flex"/>

        <!-- search -->
        <input>
      </div>

      <!-- icons -->
      <div>
        <GlobeIcon class="mr-1 h-5 w-5 text-gray-700 hover:text-gray-800"  />
      </div>


    </div>
  </div>
</template>

<script>

import GlobeIcon from "~/components/GlobeIcon";
export default {
  components: {GlobeIcon},
  methods: {
    showMobileMenu () {
      this.$emit('showMobileMenu')
    }
  }
}
</script>
