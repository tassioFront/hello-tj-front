<template>
  <VTimeline v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <slot />
  </VTimeline>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Timeline',
})
</script>
