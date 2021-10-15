<template>
  <section class="container-page">
    <header class="header">
      <h1 class="header--title tj-text-panel">Hello world, TJ</h1>
      <p>
        First of all, I'm glad you came. 😁😁 I hope you find a bunch of things
        useful for you here!
      </p>
    </header>
    <div class="content">
      <KeepReading
        v-for="keepReading in keepReadings"
        :key="keepReading.id"
        :keep-reading="keepReading"
      />
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

import KeepReading from '@/components/Layouts/Blog/KeepReading/KeepReading.vue'
import FindMoreInfoList from '@/components/Layouts/Blog/FindMoreInfoList/FindMoreInfoList.vue'
import { componentTagValidator } from '@/helpers/Blog/helloComponentsValidatior'
import { contents, keepReadings } from '@/fakeDataBase/hello'

export default Vue.extend({
  name: 'Hi',
  components: {
    KeepReading,
    FindMoreInfoList,
  },
  layout: 'blog',
  data() {
    return {
      keepReadings,
      contents,
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

.header {
  margin-bottom: $space-lg;
  @media screen and (min-width: $mobile-sm) {
    margin-bottom: $space-xlg;
  }

  &--title {
    margin-bottom: $space-sm;
    @media screen and (min-width: $mobile-sm) {
      margin-bottom: $space;
    }
  }
}

.content {
  margin-bottom: $space-md;

  &--item {
    margin-bottom: $space-md;
    @media screen and (min-width: $mobile-sm) {
      margin-bottom: $space-lg;
    }
  }

  &--item-title {
    margin-bottom: $space-sm;
  }

  &--divider {
    margin: $space-sm auto;
  }
}
</style>
