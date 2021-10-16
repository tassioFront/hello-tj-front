<template>
  <section class="container-page">
    <header class="header">
      <h1 class="header--title tj-text-panel">About me ☕</h1>
      <p>Please, get a coffee and make yourself at home.</p>
    </header>
    <div class="content text-justify">
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
import { componentTagValidator } from '~/helpers/Blog/helloComponentsValidatior'
import { contents } from '@/fakeDataBase/about'

export default Vue.extend({
  name: 'About',
  components: {
    FriendlyList,
  },
  layout: 'blog',
  data() {
    return {
      contents,
    }
  },
  head: {
    title: 'About me -',
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
