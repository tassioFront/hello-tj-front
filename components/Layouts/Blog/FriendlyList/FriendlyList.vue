<template>
  <Card class="friendly-list">
    <CardTitle v-if="list.title"> {{ list.title }} </CardTitle>
    <CardText class="friendly-list--itens">
      <Chip
        v-for="content in list.content"
        :key="content.text"
        class="friendly-list--item"
        label
        :text-color="content.contrast || 'white'"
        :color="content.color"
      >
        <Icon left> {{ content.icon || 'mdi-label' }} </Icon>
        {{ content.text }}
      </Chip>
    </CardText>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'

import Card from '@/components/AntiCorruption/Cards/Card.vue'
import CardText from '@/components/AntiCorruption/Cards/CardText.vue'
import CardTitle from '@/components/AntiCorruption/Cards/CardTitle.vue'
import Icon from '@/components/AntiCorruption/Icon/Icon.vue'
import Chip from '@/components/AntiCorruption/Chip/Chip.vue'

export default Vue.extend({
  name: 'FriendlyList',
  components: {
    Card,
    CardText,
    CardTitle,
    Icon,
    Chip,
  },
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~@/styles/layouts/blog/index.scss';

.friendly-list {
  margin-bottom: $space-sm;

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
