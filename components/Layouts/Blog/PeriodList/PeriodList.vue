<template>
  <div>
    <p class="font-weight-bold ml-8 mb-2">Today</p>
    <Timeline align-top dense>
      <TimelineItem
        v-for="content in config.value"
        :key="content.text"
        class="text-left"
        :color="content.color || 'teal lighten-1'"
        small
      >
        <div>
          <p v-html-safe="content.text" class="font-weight-normal" />
          <p class="tj-text-caption">{{ content.caption }}</p>
        </div>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Timeline from '@/components/AntiCorruption/Timeline/Timeline.vue'
import TimelineItem from '@/components/AntiCorruption/Timeline/TimelineItem.vue'

export default Vue.extend({
  name: 'PeriodList',
  components: {
    Timeline,
    TimelineItem,
  },
  props: {
    config: {
      required: true,
      type: Object,
    },
  },
})
</script>
