<template>
  <Card dark class="keep-reading" :data-testid="keepReading.id">
    <CardTitle :data-testid="keepReading.id + '-title'">
      <h3 class="tj-text-subheader">
        {{ keepReading.title }}
      </h3>
    </CardTitle>

    <CardText
      v-html-safe="keepReading.body"
      :data-testid="keepReading.id + '-body'"
      class="text-justify tj-text-body2"
    >
    </CardText>
    <CardActions
      v-if="keepReading.action"
      :data-testid="keepReading.id + `-action-${keepReading.action.link}`"
    >
      <div class="keep-reading--link">
        <Btn capitalize color="primary" plain>
          <NuxtLink tag="div" :to="keepReading.action.link">
            {{ keepReading.action.title }}
            <VIcon right dark> {{ 'mdi-arrow-right' }} </VIcon></NuxtLink
          >
        </Btn>
      </div>
    </CardActions>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'

import Card from '@/components/AntiCorruption/Cards/Card.vue'
import CardText from '@/components/AntiCorruption/Cards/CardText.vue'
import CardActions from '@/components/AntiCorruption/Cards/CardActions.vue'
import CardTitle from '@/components/AntiCorruption/Cards/CardTitle.vue'
import Btn from '@/components/AntiCorruption/Forms/Btn/Btn.vue'

export default Vue.extend({
  name: 'KeepReading',
  components: {
    Card,
    CardText,
    CardActions,
    CardTitle,
    Btn,
  },
  props: {
    keepReading: {
      required: true,
      type: Object,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~@/styles/layouts/blog/index.scss';

.keep-reading {
  margin-bottom: $space-md;

  &--link {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
}
</style>
