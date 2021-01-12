<template>

<div class="w-full">
  <!-- This is the landing page content - swap out with your own -->
    <div class="p-4 w-full">
      <div class="grid grid-cols-10 gap-4">
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <a href="https://docstemplate.cleavr.cloud" target="_blank" class="flex flex-row shadow-sm bg-blue-100 hover:bg-blue-200 rounded p-4 items-center">
            <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl text-blue-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div class="flex flex-col flex-grow ml-4 font-semibold text-blue-800">
              Live Preview
            </div>
          </a>
        </div>
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <a href="https://github.com/cleavr/docs-template" target="_blank" class="flex flex-row shadow-sm bg-green-100 hover:bg-green-200 rounded p-4 items-center">
            <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl text-green-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div class="flex flex-col flex-grow ml-4 font-semibold text-green-800">
              GitHub Repo
            </div>
          </a>
        </div>
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <a href="https://docs.cleavr.io" target="_blank" class="flex flex-row shadow-sm bg-orange-100 hover:bg-orange-200 rounded p-4 items-center">
            <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl text-orange-500">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <div class="flex flex-col flex-grow ml-4 font-semibold text-orange-800">
              Cleavr Docs
            </div>
          </a>
        </div>
      </div>
    </div>
  <div class="flex flex-col w-full mt-8">
    <div class="flex md:flex-row flex-col bg-red-200 justify-center md:text-left text-center rounded shadow-lg">
      <div class="flex flex-col relative justify-center items-center">
        <div class="rounded-full w-12 h-12 text-xl text-red-100 bg-red-700 font-black flex justify-center items-center absolute shadow-lg ml-2 md:ml-0 md:mr-3">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      </div>
      <div class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-red-200">
        <div class="text-xs uppercase font-bold text-red-500">Build</div>
        <div class="md:text-3xl text-xl font-bold text-red-700">Nuxt / Content</div>
        <div class="mt-4 text-red-800">
          If you love VueJS and are looking to create a blog or a documentation site, then you need to use NuxtJS and their Content module.
        </div>
        <div class="mt-6">
          <a href="https://content.nuxtjs.org" target="_blank" class="text-red-800 hover:text-red-600">
            View the Nuxt / Content docs -->
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full">
    <div class="flex md:flex-row flex-col bg-blue-200 justify-center md:text-left text-center rounded shadow-lg mt-12">
      <div class="flex flex-col relative justify-center items-center">
        <div class="rounded-full w-12 h-12 text-xl text-teal-100 bg-blue-700 font-black flex justify-center items-center absolute shadow-lg ml-2 md:ml-0 md:mr-3">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
      </div>
      <div class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-blue-200">
        <div class="text-xs uppercase font-bold text-blue-500">Design</div>
        <div class="md:text-3xl text-xl font-bold text-blue-700">TailwindCSS</div>
        <div class="mt-4 text-blue-800">
          This starter template uses TailwindCSS. Check out their documentation for the various ways you can apply TailwindCSS to your documentation
          center. You may also want to check out TailwindUI, their paid library of pre-made components.
        </div>
        <div class="mt-6">
          <a href="https://tailwindcss.com/docs" target="_blank" class="text-blue-800 hover:text-blue-600">
            View the TailwindCSS docs -->
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full">
    <div class="flex md:flex-row flex-col bg-teal-200 justify-center md:text-left text-center rounded shadow-lg mt-12">
      <div class="flex flex-col relative justify-center items-center">
        <div class="rounded-full w-12 h-12 text-xl text-teal-100 bg-teal-700 font-black flex justify-center items-center absolute shadow-lg ml-2 md:ml-0 md:mr-3">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
      <div class="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-teal-200">
        <div class="text-xs uppercase font-bold text-teal-500">Deploy</div>
        <div class="md:text-3xl text-xl font-bold text-teal-700">Cleavr</div>
        <div class="mt-4 text-teal-800">
          When you're ready to make your site live, use Cleavr to provision a VPS server, configure your server for Nuxt, and deploy your site.
        </div>
        <div class="mt-6">
          <a href="https://cleavr.io" target="_blank" class="text-teal-800 hover:text-teal-600">
            Deploy your apps with Cleavr -->
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-12 pb-12 w-full">
    <h2 class="text-2xl font-semibold">
      Libraries Used
    </h2>
    <div class="bg-white w-full min-w-3xl overflow-x-scroll shadow-md rounded my-6">
      <table class="text-left w-full border-collapse">
        <thead>
        <tr>
          <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Library</th>
          <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">
            <a href="https://content.nuxtjs.org" class="text-blue-500 hover:text-blue-700" target="_blank">
              @nuxt/content
            </a>
          </td>
          <td class="py-4 px-6 border-b border-grey-light text-sm">
            Create blogs and docs using markdown and Vue components
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">
            <a href="https://github.com/drdogbot7/tailwindcss-responsive-embed" class="text-blue-500 hover:text-blue-700" target="_blank">
              tailwindcss-responsive-embed
            </a>
          </td>
          <td class="py-4 px-6 border-b border-grey-light text-sm">
            Make embedded content responsive
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">
            <a href="https://github.com/tailwindlabs/tailwindcss-aspect-ratio" class="text-blue-500 hover:text-blue-700" target="_blank">
              tailwindcss-aspect-ratio
            </a>
          </td>
          <td class="py-4 px-6 border-b border-grey-light text-sm">
            Display ideal aspect rations for media
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">
            <a href="https://tailwindcss.com/docs/typography-plugin" class="text-blue-500 hover:text-blue-700" target="_blank">
              @tailwindcss/typography
            </a>
          </td>
          <td class="py-4 px-6 border-b border-grey-light text-sm">
            Style html converted from Markdown with Prose class
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">
            <a href="https://www.npmjs.com/package/nuxt-content-algolia" class="text-blue-500 hover:text-blue-700" target="_blank">
              nuxt-content-algolia
            </a>
          </td>
          <td class="py-4 px-6 border-b border-grey-light text-sm">
            Deliver documentation content to your Algolia indices
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">
            <a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/vue/" class="text-blue-500 hover:text-blue-700" target="_blank">
              vue-instantsearch
            </a>
          </td>
          <td class="py-4 px-6 border-b border-grey-light text-sm">
            Algolia search components made for VueJS
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">
            <a href="https://www.npmjs.com/package/v-click-outside" class="text-blue-500 hover:text-blue-700" target="_blank">
              v-click-outside
            </a>
          </td>
          <td class="py-4 px-6 border-b border-grey-light text-sm">
            Detect outside clicks - great for collapsing dropdown menus
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
</style>
