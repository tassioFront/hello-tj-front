<template>
  <Card
    class="quotes"
    :color="isDefaultMode ? '' : 'cyan'"
    dark
    max-width="400"
  >
    <CardTitle class="text-right">
      <Icon large left>
        {{
          isDefaultMode ? 'mdi-comment-quote-outline' : 'mdi-message-bulleted'
        }}
      </Icon>
      <span class="tj-text-caption">
        {{ config.author }}
      </span>
    </CardTitle>
    <CardText class="tj-text-subheader text-left font-weight-bold">
      {{ config.text }}
    </CardText>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropOptions } from 'vue/types/options.d'

import Card from '@/components/AntiCorruption/Cards/Card.vue'
import CardText from '@/components/AntiCorruption/Cards/CardText.vue'
import CardTitle from '@/components/AntiCorruption/Cards/CardTitle.vue'
import Icon from '@/components/AntiCorruption/Icon/Icon.vue'

enum quote {
  default = 'default',
  comment = 'comment',
}

interface IConfig {
  mode: quote.default | quote.comment
}

export default Vue.extend({
  name: 'Quotes',
  components: {
    Card,
    CardText,
    CardTitle,
    Icon,
  },
  props: {
    config: {
      type: Object,
      required: true,
    } as PropOptions<IConfig>,
  },
  data() {
    return {
      isDefaultMode: quote.default === this.config.mode,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~@/styles/layouts/blog/index.scss';

.quotes {
  margin: $space-md auto;
}
</style>
