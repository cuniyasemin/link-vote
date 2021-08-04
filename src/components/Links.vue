<template>
  <div class="max-w-lg rounded overflow-hidden mx-auto my-6 px-2">
    <div v-if="links.length > 0">
      <select
        v-model="sortBy"
        class="
          block
          black
          bg-gray-100
          border border-gray-400
          hover:border-gray-500
          px-4
          py-2
          pr-8
          rounded
          shadow
          leading-tight
        "
      >
        <option value="null" selected>Choose</option>
        <option value="most">Most Voted (Z -> A)</option>
        <option value="less">Less Voted (A -> z)</option>
      </select>
      <LinkItem v-for="(link, key) in sort(links)" :key="key" :link="link" />
    </div>
    <div
      v-else
      class="
        bg-red-100
        border-t-4 border-red-500
        rounded-b
        text-red-900
        px-4
        py-3
        shadow-md
      "
      role="alert"
    >
      <div class="flex">
        <div class="py-1">
          <svg
            class="fill-current h-6 w-6 text-red-500 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
            />
          </svg>
        </div>
        <div>
          <p class="font-bold">No links found</p>
          <p class="text-sm">
            You can add new one by clicking on submit a link button above.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LinkItem from '@/components/LinkItem.vue'
export default {
  name: 'Links',
  components: {
    LinkItem
  },
  computed: {
    ...mapState({
      links: (state) => state.links
    }),
    sortBy: {
      get () {
        return this.$store.state.sortBy
      },
      set (value) {
        this.$store.commit('update_sorting', value)
      }
    }
  },
  methods: {
    sort: function (arr) {
      console.log(this.sortBy)
      return arr.slice().sort((a, b) => {
        if (this.sortBy === 'most') {
          return b.points - a.points
        } else {
          return a.points - b.points
        }
      })
    }
  }
}
</script>
