<template>
  <div class="content-factory-group">
    <v-expansion-panels multiple>
      <ContentFactoryItem
        v-for="(panel, index) in scopedPanels"
        :key="index"
        multiple
        :panel="panel"
        @update:panel="panel = $event"
        @update="update($event, index)"
      />
      <!-- compponents type to create: PeriodList FriendlyList -->
    </v-expansion-panels>
    <Btn class="my-10 ml-auto" color="primary" @click="addNew">
      New content
    </Btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ContentFactoryItem from '@/components/Layouts/Admin/ContentFactory/ContentFactoryItem.vue'
import Btn from '@/components/AntiCorruption/Forms/Btn/Btn.vue'

export default Vue.extend({
  name: 'ContentFactoryGroup',
  components: {
    ContentFactoryItem,
    Btn,
  },
  props: {
    panels: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      scopedPanels: [] as any,
    }
  },
  methods: {
    addNew() {
      this.scopedPanels.push({})
    },
    update(newValue: any, index: number) {
      this.scopedPanels[index] = newValue
      this.$emit('update:panels', this.scopedPanels)
    },
  },
})
</script>
<style lang="scss" scoped>
.content-factory-group {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
