<template>
  <div class="w-full max-w-6xl">
    <h1 class="text-3xl font-semibold text-gray-9000 pb-8">
      {{ doc.title }}
    </h1>
    <NuxtContent :document="doc" class="prose" />
  </div>
</template>

<script>

export default {
  async asyncData( { $content, params } ) {
    const doc = await $content('documentation', params.doc ).fetch()
    return { doc }
  },
  head() {
    return {
      title: this.doc.title + ' - Docs Template',
      meta: [
        {hid: 'description', name: 'description', content: this.doc.description},
        // Open Graph
        {hid: 'og:title', property: 'og:title', content: this.doc.title},
        {hid: 'og:description', property: 'og:description', content: this.doc.description},
        // Twitter Card
        {hid: 'twitter:card', name: 'twitter:card', content: 'summary'},
        {hid: 'twitter:site', name: 'twitter:site', content: '@<your twitter handle'},
        {hid: 'twitter:title', name: 'twitter:title', content: this.doc.title},
        {hid: 'twitter:description', name: 'twitter:description', content: this.doc.description},
        {hid: 'twitter:image', name: 'twitter:image', content: this.doc.image},
        {hid: 'twitter:player', name: 'twitter:player', content: this.doc.video}
      ]
    }
  }

}
</script>
