<template>
  <div>
    <div class="absolute w-full flex bg-blue-100 z-40 inset-0 p-10">
      <div class="overflow-y-auto">
        <ExternalLinks />
        <DocsContents />
      </div>
      <div class="absolute top-0 right-0 pt-6 pr-10">
        <button @click="closeMobileMenu" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full hover:text-gray-700">
          X
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import ExternalLinks from "~/components/ExternalLinks";
export default {
  components: {ExternalLinks},
  methods: {
    closeMobileMenu () {
      this.$emit('closeMobileMenu')
    }
  }
}

</script>
