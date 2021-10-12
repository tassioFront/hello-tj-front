<template>
  <VCard v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <slot />
  </VCard>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Card',
})
</script>
