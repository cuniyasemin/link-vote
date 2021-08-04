<template>
    <div
      class="max-w-lg rounded border mb-2 overflow-hidden mx-auto px-2"
      style="background: #f9f9f9"
    >
      <button v-if="!submitClicked" class="" @click="submitClick()">
        <div
          class="
            md:flex
            py-4
            relative
            cursor-pointer
            hover:bg-gray-100
            hover:border
          "
          @mouseover="isMouseOver = true"
          @mouseleave="isMouseOver = false"
        >
          <div class="md:flex flex-row">
            <div
              class="md:flex border items-center box justify-center"
              style="
                background: #ececec;
                border: 1px solid black;
                border-radius: 5px;
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"
                />
              </svg>
            </div>
            <div class="md:flex px-4 flex-col justify-center">
              <p style="font-size: 25px">SUBMIT A LINK</p>
            </div>
          </div>
        </div>
      </button>
      <button
        v-else
        class="inline-flex items-center"
        @click="returnToLinksClick()"
      >
        <svg
          class="fill-current w-4 h-4 mr-2"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 492 492"
          style="enable-background: new 0 0 492 492"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
                  c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
                  L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
                  c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
                  c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
                  C492,219.198,479.172,207.418,464.344,207.418z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        <span>Return to List</span>
      </button>
      <hr />
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SubmitLink',
  methods: {
    submitClick () {
      this.$store.commit('submitClicked', true)
    },
    returnToLinksClick () {
      this.$store.commit('submitClicked', false)
    }
  },
  computed: mapState({
    submitClicked: (state) => state.submitClicked
  })
}
</script>
