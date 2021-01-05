<template>
  <div class="fixed flex flex-shrink-0 h-16 w-full max-w-6xl z-10 bg-white border-b-2 border-gray-100">
    <!-- TODO Add mobile friendly header -->

    <div class="flex-1 px-4 flex items-center justify-between">
      <div class="flex">
        <!-- logo -->
        <logo class="h-5 w-5"/>

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
  components: {GlobeIcon}
}
</script>
