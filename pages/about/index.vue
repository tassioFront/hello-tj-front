<template>
  <section class="container-page">
    <header class="header">
      <h1 class="header--title tj-text-panel">About me ☕</h1>
      <p>Please, get a coffee and make yourself at home</p>
    </header>
    <div class="content">
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
            :is="'componentName(body.type)'"
            v-if="body.type"
            :list="body"
          />
          <p v-else>{{ body.text }}</p>
        </div>
      </article>
      <article class="content--item">
        <h2 class="content--item-title tj-text-title">Hard Skills</h2>
        <!-- <CharacteristicsList /> -->
        <v-card>
          <v-card-title> I've been working with: </v-card-title>
          <v-card-text>
            <v-chip class="ma-2" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              HTML
            </v-chip>
            <v-chip class="ma-2" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              CSS
            </v-chip>
          </v-card-text>
          Javascript, Vue 2 (Vuex and VueRouter), TypeScript, Sass, Vuetify,
          Jest
        </v-card>
        <v-card>
          <v-card-title> I worked with: </v-card-title>
          <v-card-text>
            <v-chip class="ma-2" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              Tailwind
            </v-chip>
            <v-chip class="ma-2" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              Firebase
            </v-chip>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title> I had contact in personal projects: </v-card-title>
          <v-card-text>
            <v-chip class="ma-2" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              React
            </v-chip>
            <v-chip class="ma-2" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              Vue 3
            </v-chip>
          </v-card-text>
          Nuxt
        </v-card>
      </article>

      <article class="content--item">
        <h2 class="content--item-title tj-text-title">Soft Skills</h2>
        Effective listener, clear communication, attentive, professional,
        empathetic, and dependable. I'm an easy-going person who likes to share
        what I have been learning. 😊 - Always thinking in User Experience;
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

// import KeepReading from '@/components/Layouts/Blog/KeepReading/KeepReading.vue'
// import CharacteristicsList from '@/components/Layouts/Blog/CharacteristicsList/CharacteristicsList.vue'
import { keepReadings } from '@/fakeDataBase/hello'

export default Vue.extend({
  name: 'About',
  components: {
    // KeepReadings,
    // CharacteristicsList,
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
      ],
    }
  },
  methods: {},
})
</script>

<style lang="scss" scoped>
@import '~@/styles/layouts/blog/index.scss';
</style>
