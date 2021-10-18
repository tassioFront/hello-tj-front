<template>
  <div>
    <p class="font-weight-bold ml-8 mb-2">{{ config.date || 'Today' }}</p>
    <VTimeline align-top dense>
      <VTimelineItem
        v-for="content in config.content"
        :key="content.text"
        class="text-left"
        :color="content.color || 'teal lighten-1'"
        small
      >
        <div>
          <p v-html-safe="content.text" class="font-weight-normal" />
          <p class="tj-text-caption">{{ content.caption }}</p>
        </div>
      </VTimelineItem>
    </VTimeline>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PeriodList',
  props: {
    config: {
      required: true,
      type: Object,
    },
  },
})
</script>
