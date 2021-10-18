<template>
  <aside class="find-more-info-list">
    <h4
      v-if="config.title"
      class="find-more-info-list--title tj-text-body tj-text-body"
    >
      {{ config.title }}
    </h4>
    <div v-for="content in config.content" :key="content.text">
      <ListItens>
        <p v-html-safe="content.text" />
        <VBtn
          v-if="content.link"
          :href="content.link"
          target="_blank"
          plain
          aria-hidden="false"
          :aria-label="content.text"
        >
          <VIcon color="secondary"> {{ 'mdi-open-in-new' }} </VIcon>
        </VBtn>
      </ListItens>
      <VDivider class="find-more-info-list--divider"></VDivider>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'

import ListItens from '~/components/AntiCorruption/ListItens/ListItens.vue'

export default Vue.extend({
  name: 'FindMoreInfoList',
  components: {
    ListItens,
  },
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~@/styles/layouts/blog/index.scss';

.find-more-info-list {
  &--title {
    margin-bottom: $space-sm;
    font-weight: 500;
  }

  &--divider {
    margin: $space-sm auto;
  }
}
</style>
