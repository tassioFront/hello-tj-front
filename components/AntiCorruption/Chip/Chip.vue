<template>
  <VChip v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <slot />
  </VChip>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Chip',
})
</script>
