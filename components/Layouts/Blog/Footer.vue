<template>
  <VFooter :absolute="!fixed" app>
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </VFooter>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BlogFooter',
  data() {
    return {
      fixed: false,
    }
  },
})
</script>
