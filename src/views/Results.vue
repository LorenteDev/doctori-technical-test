<template>
  <section
    v-if="!loading"
    id="results-container">
    <h1>Results</h1>
  </section>
  <Loading v-else/>
</template>

<script>
import axios from 'axios'
import Loading from '@/components/Loading.vue'

export default {
  name: 'Results',
  components: {
    Loading
  },
  data: () => ({
    loading: false
  }),
  methods: {
    search () {
      axios({
          method: 'get',
          url: `https://www.doctori.com/coche/prices`,
          headers: {
            Authentication: '68NkpNZfYNOaefCGCTXcWXngT7EEhiQf1hMxaXpE9TYqMqtcttIqbnxW0sQG1mM8ZgzeV0TEyhn'
          }
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  beforeMount() {
    this.search()
  }
}
</script>

<style scoped>

</style>