<template>
  <ais-instant-search
    :search-client="searchClient"
    index-name="docs"
  >
    <ais-configure
      :attributesToSnippet="['bodyPlainText']"
      :hits-per-page.camel="5"
    >
      <ais-autocomplete v-click-outside="onClickOutside">
        <div slot-scope="{ currentRefinement, indices, refine }">
          <input
            type="search"
            ref="searchInput"
            :placeholder="searchPlaceholder"
            class="w-full py-2 px-3"
            :value="currentRefinement"
            @input="refine($event.currentTarget.value)"
            autocomplete="off"
            @focus="showResults = true"
            @keydown.up.prevent="highlightPrevious"
            @keydown.down.prevent="highlightNext(indices[0].hits.length)"
            @keydown.enter="goToDoc(indices)"
          >
          <div v-show="currentRefinement.length && showResults" class="absolute z-10 transform mt-3 px-2 max-w-md sm:px-0">
            <div class="rounded-md shadow-lg overflow-hidden">
              <div class="relative grid gap-6 bg-gray-900 text-gray-100 px-5 py-6 sm:gap-8 sm:p-8">
                <div v-if="currentRefinement" v-for="section in indices" :key="section.objectID" class="divide-y divide-blue-900">
                  <nuxt-link to="#" v-for="(hit, index) in section.hits" :key="hit.objectID"
                             class="block text-sm col-span-2 py-2 transition ease-in-out duration-150"
                             :class="{ 'bg-blue-900' : isCurrentIndex(index) }"
                  >
                    <div class="px-2" @mouseover="highlightedIndex = index">
                      <ais-highlight attribute="title" :hit="hit" class="block text-blue-300 font-medium" />
                      <ais-snippet attribute="bodyPlainText" :hit="hit" class="block text-gray-100 font-base" />
                    </div>
                  </nuxt-link>
                </div>
                <ais-powered-by theme="dark" class="px-2" />
              </div>
            </div>
          </div>
        </div>
      </ais-autocomplete>
    </ais-configure>
  </ais-instant-search>

</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    ClickOutside: vClickOutside.directive
  },
  data () {
    return {
      searchClient: algoliasearch('20P06SW2J9', '1b504947a7f7df96fa0f978ecec060f4'),
      showResults: false,
      highlightedIndex: -1
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      window.addEventListener('keydown', event => {
        if(event.metaKey && event.key === 'k') {
          this.$refs.searchInput.focus()
          event.preventDefault()
        }
      })
    })
  },
  watch: {
    '$route' () {
      this.showResults = false
      this.$refs.searchInput.blur()
    }
  },
  computed: {
    searchPlaceholder () {
      if (navigator.appVersion.indexOf('Mac') !== -1 ) {
        return 'Search - ⌘k to focus'
      }
      else if (navigator.appVersion.indexOf('Win') !== -1 ) {
        return 'Search - Win + k to focus'
      } else {
        return 'Search'
      }
    }
  },
  methods: {
    onClickOutside () {
      this.showResults = false
    },
    highlightPrevious () {
      if (this.highlightedIndex > 0 ){
        this.highlightedIndex -= 1
      }
    },
    highlightNext (resultsCount) {
      if (this.highlightedIndex < resultsCount - 1) {
        this.highlightedIndex += 1
      }
    },
    isCurrentIndex (index) {
      return index === this.highlightedIndex
    },
    goToDoc (indices) {
      this.$nuxt.$router.push(indices[0].hits[this.highlightedIndex].objectID)
    }
  }
}



</script>
