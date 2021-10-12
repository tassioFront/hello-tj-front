<template>
  <VFooter dark padless>
    <VCard class="flex" flat tile>
      <VCardTitle class="footer--title teal">
        <strong class="tj-text-subheading"
          >Let's getting in touch on social networks!</strong
        >

        <div>
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
        </div>
      </VCardTitle>

      <VCardText class="py-2 white--text text-center">
        Made with ❤️ by
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
  &--title {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: $mobile-sm) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &--social__link {
    &:not(:first-child) {
      margin-left: $space-xs;
    }
  }

  &--open-ish__link {
    margin-left: $text-gap;
  }
}
</style>
