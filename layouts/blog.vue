<template>
  <v-app dark>
    <Header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '../components/Layouts/Blog/Header.vue'
import Footer from '../components/Layouts/Blog/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
  layout: 'blog',
}
</script>

<style lang="sass">
@import "~@/styles/layouts/blog/index.scss"
</style>
