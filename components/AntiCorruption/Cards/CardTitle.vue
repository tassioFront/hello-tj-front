<template>
  <VCardTitle v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <slot />
  </VCardTitle>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardTitle',
})
</script>
