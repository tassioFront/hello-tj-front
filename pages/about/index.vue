<template>
  <section class="container-page">
    <div v-if="contents.length">
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
            class="content--item-text"
          >
            <component
              :is="componentName(body.type)"
              v-if="body.type"
              :config="body"
              class="content--item-text"
            />
            <p v-else>{{ body.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import FriendlyList from '@/components/Layouts/Blog/FriendlyList/FriendlyList.vue'
import PeriodList from '@/components/Layouts/Blog/PeriodList/PeriodList.vue'
import { componentTagValidator } from '~/helpers/Blog/helloComponentsValidatior/helloComponentsValidatior'
import aboutApi from '@/services/Blog/about/about.service'

export default Vue.extend({
  name: 'About',
  components: {
    FriendlyList,
    PeriodList,
  },
  layout: 'blog',
  async asyncData() {
    const contents = await aboutApi.index()
    return {
      contents,
    }
  },
  data() {
    return {
      contents: [],
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
