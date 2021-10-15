<template>
  <VChipGroup v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <slot />
  </VChipGroup>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ChipGroup',
})
</script>
