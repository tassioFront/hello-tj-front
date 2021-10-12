<template>
  <VFooter :absolute="!fixed" dark padless>
    <VCard class="flex" flat tile>
      <VCardTitle class="teal">
        <strong class="tj-text-subheading"
          >Let's getting in touch on social networks!</strong
        >

        <VSpacer></VSpacer>

        <VBtn
          v-for="social in socials"
          :key="social.icon"
          :href="social.link"
          class="footer--social__link"
          target="_blank"
          dark
          icon
        >
          <VIcon size="24px">
            {{ social.icon }}
          </VIcon>
        </VBtn>
      </VCardTitle>

      <VCardText class="py-2 white--text text-center">
        Made with ❤️by
        <VBtn
          class="footer--open-ish__link"
          small
          plain
          color="secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-ish"
          ><strong>Open-ish</strong>
        </VBtn>
      </VCardText>
    </VCard>
  </VFooter>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BlogFooter',
  data() {
    return {
      fixed: false,
      socials: [
        { link: 'https://github.com/tassioFront', icon: 'mdi-github' },
        {
          link: 'https://www.linkedin.com/in/tassio-front-end/',
          icon: 'mdi-linkedin',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/styles/layouts/blog/index.scss';
$text-gap: -10px;

.footer {
  &--social__link {
    &:not(:first-child) {
      margin-right: $space-sm;
    }
  }

  &--open-ish__link {
    margin-left: $text-gap;
  }
}
</style>
