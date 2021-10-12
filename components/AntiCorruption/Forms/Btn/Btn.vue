<template>
  <VBtn v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <slot />
  </VBtn>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Btn',
})
</script>
