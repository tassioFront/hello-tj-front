<template>
  <VApp dark>
    <VContainer>
      <Header />
      <VMain>
        <Nuxt />
      </VMain>
    </VContainer>
    <Footer />
  </VApp>
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

<style lang="scss">
@import '~@/styles/layouts/blog/index.scss';
</style>
