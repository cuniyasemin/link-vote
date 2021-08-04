<template>
  <div class="max-w-lg overflow-hidden mx-auto my-6">
    <div class="w-full">
      <form class="bg-white rounded px-2 pt-6 pb-8 mb-4">
        <p class="font-bold text-3xl py-5 text-dark">Add to Link</p>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Link Name:
          </label>
          <input
            v-model="linkName"
            :class="{ 'mb-3 border-red-500': linkNameError }"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none
              focus:shadow-outline
            "
            type="text"
            placeholder="e.g Alphabet"
          />
          <p v-if="linkNameError" class="text-red-500 text-xs">
            Please enter a name for your link.
          </p>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Link URL:
          </label>
          <input
            v-model="linkUrl"
            :class="{ 'mb-3 border-red-500': linkUrlError }"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none
              focus:shadow-outline
            "
            type="text"
            placeholder="e.g http://abc.xyz"
          />
          <p v-if="linkUrlError" class="text-red-500 text-xs">
            Please enter a valid URL.
          </p>
        </div>
        <div class="flex items-center justify-end">
          <button
            class="
              bg-black
              hover:bg-black
              text-white
              font-bold
              py-2
              px-4
              rounded-pill
              focus:outline-none
              focus:shadow-outline
            "
            type="button"
            @click="addLink()"
          >
            Add Link
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateLink',
  data () {
    return {
      linkName: '',
      linkUrl: '',
      linkNameError: false,
      linkUrlError: false
    }
  },
  methods: {
    addLink () {
      if (this.linkName.length === 0) {
        this.linkNameError = true
      } else if (this.linkUrl.length === 0) {
        this.linkNameError = false
        this.linkUrlError = true
      } else if (
        !this.linkUrl.match(
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
        )
      ) {
        this.linkUrlError = true
      } else {
        this.linkUrlError = false
        const link = {
          name: this.linkName,
          url: this.linkUrl,
          points: 0
        }
        this.$store.commit('addLink', link)
        this.$store.commit('submitClicked', false)
      }
    }
  }
}
</script>
