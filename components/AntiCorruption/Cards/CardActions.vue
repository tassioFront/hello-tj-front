<template>
  <VCardActions v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <slot />
  </VCardActions>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardActions',
})
</script>
