<template>
  <VTimelineItem v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <slot />
  </VTimelineItem>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TimelineItem',
})
</script>
