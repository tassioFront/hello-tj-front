<template>
  <VIcon v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <slot />
  </VIcon>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Icon',
})
</script>
