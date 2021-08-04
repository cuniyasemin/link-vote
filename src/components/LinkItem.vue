<template>
  <div
    class="
      md:flex
      mt-4
      py-4
      relative
      cursor-pointer
      hover:bg-gray-100
      hover:border
    "
    @mouseover="isMouseOver = true"
    @mouseleave="isMouseOver = false"
  >
    <button
      v-if="isMouseOver"
      class="absolute font-bold rounded text-xs right-0 z-50 -mt-8"
      @click="remove(link)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-dash-circle"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
      </svg>
    </button>
    <div class="md:flex flex-row">
      <div
        class="md:flex border p-4 flex-col items-center box"
        style="background: #ececec; border: 1px solid black; border-radius: 5px"
      >
        <p class="uppercase text-black text-4xl font-bold">{{ link.points }}</p>
        <p class="uppercase">Points</p>
      </div>
      <div class="md:flex px-4 flex-col align-start">
        <p class="font-bold">{{ link.name }}</p>
        <a :href="link.url" target="_blank" class="text-gray-600 mb-auto"
          >({{ link.url }})</a
        >
        <div class="md:flex flex-row justify-between">
          <span
            class="text-gray-600 cursor-pointer text-gray-600 font-bold"
            @click="upVote(link)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
            Up vote</span
          >
          <span
            class="text-gray-600 cursor-pointer text-gray-600 font-bold"
            @click="downVote(link)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              /></svg
            >Down vote</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LinkItem',
  props: {
    link: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      isMouseOver: false
    }
  },
  computed: mapState({
    links: (state) => state.links
  }),
  methods: {
    upVote (link) {
      this.$store.commit('upVote', link)
    },
    downVote (link) {
      this.$store.commit('downVote', link)
    },
    remove (link) {
      this.$store.commit('remove', link)
    }
  }
}
</script>

<style scoped>
svg {
  display: inline;
}
</style>
