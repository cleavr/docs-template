<template>
  <div>
    <h1 class="text-3xl font-semibold text-gray-9000 pb-8">
      {{ doc.title }}
    </h1>
    <NuxtContent :document="doc" class="prose" />
  </div>
</template>

<script>

export default {
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  async asyncData( { $content, params } ) {
    const doc = await $content('documentation', params.doc ).fetch()
    return { doc }
  }

}
</script>
