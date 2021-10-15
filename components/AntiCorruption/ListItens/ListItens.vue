<template>
  <VListItem v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <slot />
  </VListItem>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ListItens',
})
</script>
