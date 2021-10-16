<template>
  <section class="container-page">
    <header class="header">
      <h1 class="header--title tj-text-panel">About me ☕</h1>
      <p>Please, get a coffee and make yourself at home.</p>
    </header>
    <div class="content text-justify">
      <!-- todo [about] own intro -->
      <article class="content--item">
        <h2 class="content--item-title tj-text-title">Introduction</h2>
        <p>{{ keepReadings[0].body }}</p>
      </article>
      <article
        v-for="content in contents"
        :key="content.id"
        class="content--item"
      >
        <h2
          class="content--item-title tj-text-title"
          :data-testid="content.id + '-title'"
        >
          {{ content.title }}
        </h2>
        <div
          v-for="body in content.body"
          :key="body.text"
          :data-testid="content.id + '-content'"
        >
          <component
            :is="componentName(body.type)"
            v-if="body.type"
            :list="body"
          />
          <p v-else>{{ body.text }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import FriendlyList from '@/components/Layouts/Blog/FriendlyList/FriendlyList.vue'
import { keepReadings } from '@/fakeDataBase/hello'
import { componentTagValidator } from '~/helpers/Blog/helloComponentsValidatior'

export default Vue.extend({
  name: 'About',
  components: {
    FriendlyList,
  },
  layout: 'blog',
  data() {
    return {
      keepReadings,
      contents: [
        {
          id: 'break-ice',
          title: 'Just to break the ice - what I do for fun',
          body: [
            {
              text: `For sure that's a good one! So, I love wines🍷.`,
            },
            {
              text: `It's a recent love and
          hobby, which happened when my wife and I went to a winery here in São
          Paulo. Since now, I like to read about wines and share them with
          friends. And yeah, catching up with friends is another one!`,
            },
            {
              text: `I love
          pets too, dogs to be more specific. I like to travel with my wife. We
          like to know calm places and to have an awesome breakfast.`,
            },
          ],
        },
        {
          id: 'hard-skills',
          title: 'Hard Skills',
          body: [
            {
              type: 2,
              title: 'I have been working with:',
              content: [
                {
                  text: 'HTML',
                  color: 'purple darken-1',
                },
                {
                  text: 'CSS',
                  color: 'light-blue darken-1',
                },
                {
                  text: 'JavaScript',
                  color: 'yellow',
                },
                {
                  text: 'Vue 2 (Vuex and VueRouter)',
                  color: 'green darken-1',
                },

                {
                  text: 'Sass',
                  color: 'pink darken-1',
                },
                {
                  text: 'TypeScript',
                  color: 'blue darken-1',
                },
                {
                  text: 'Jest',
                  color: 'deep-orange darken-1',
                },
                {
                  text: 'Vuetify',
                  color: 'light-blue darken-1',
                },
              ],
            },
            {
              type: 2,
              title: 'I worked with:',
              content: [
                {
                  text: 'Tailwind',
                  color: 'teal darken-1',
                },
                {
                  text: 'Firebase',
                  color: 'orange darken-1',
                },
              ],
            },
            {
              type: 2,
              title: 'I had contact in personal projects',
              content: [
                {
                  text: 'React',
                  color: 'deep-purple darken-1',
                },
                {
                  text: 'Vue 3',
                  color: 'green darken-1',
                },
                {
                  text: 'Nuxt',
                  color: 'teal darken-1',
                },
                {
                  text: 'Node',
                  color: 'green darken-2',
                },
              ],
            },
          ],
        },
        {
          id: 'soft-skills',
          title: 'Soft Skills',
          body: [
            {
              text: `I'm an easy-going person who likes to share what I have been learning.`,
            },
            {
              type: 2,
              content: [
                {
                  text: 'User Experience first',
                  color: 'cyan lighten-1',
                  contrast: 'black',
                  icon: 'mdi-clipboard-account',
                },
                {
                  text: 'Effective listener',
                  color: 'cyan lighten-1',
                  contrast: 'black',
                  icon: 'mdi-account-tie-voice',
                },
                {
                  text: 'Clear communication',
                  color: 'cyan lighten-1',
                  contrast: 'black',
                  icon: 'mdi-account-multiple',
                },
                {
                  text: 'Attentive',
                  color: 'cyan lighten-1',
                  contrast: 'black',
                  icon: 'mdi-phone-outline',
                },
                {
                  text: 'Professional',
                  color: 'cyan lighten-1',
                  contrast: 'black',
                  icon: 'mdi-account-tie',
                },
                {
                  text: 'Empathetic',
                  color: 'cyan lighten-1',
                  contrast: 'black',
                  icon: 'mdi-hand-heart-outline',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    componentName(type: number) {
      return componentTagValidator(type)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~@/styles/layouts/blog/index.scss';

.friendly-list {
  &--itens {
    display: flex;
    flex-wrap: wrap;
  }

  &--item:not(:last-of-type) {
    margin-right: $space-xs;
    margin-bottom: $space-xs;
  }
}
</style>
