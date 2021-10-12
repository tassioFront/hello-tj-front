<template>
  <VCardText v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <slot />
  </VCardText>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardText',
})
</script>
