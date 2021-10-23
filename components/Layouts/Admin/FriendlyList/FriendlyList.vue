<template>
  <div class="friendly-list">
    <!-- <div v-for="item in items" :key="item.text" class="friendly-list__items"> -->
    <div class="friendly-list__config">
      <!-- @input="$emit('updateValue', text)" -->
      <ChipGroup class="friendly-list__config-items mb-5">
        <Chip
          v-for="(item, index) in items"
          :key="index"
          :color="item.color"
          @click="change(item, index)"
          >{{ item.text }}
        </Chip>
        <Chip @click="createNew"> New </Chip>
      </ChipGroup>
      <Input
        v-model="text"
        :disabled="!hasSelected"
        label="Type content"
        @input="inputText($event)"
      />
    </div>
    <!-- </div> -->
    <v-color-picker
      v-model="color"
      :disabled="!hasSelected"
      hide-sliders
      hide-inputs
      class="ma-2"
      show-swatches
      @input="inputColor($event)"
    >
    </v-color-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Input from '@/components/AntiCorruption/Forms/Input/Input.vue'
import Chip from '@/components/AntiCorruption/Chip/Chip.vue'
import ChipGroup from '@/components/AntiCorruption/Chip/ChipGroup.vue'

export default Vue.extend({
  name: 'FriendlyList',
  components: {
    Input,
    Chip,
    ChipGroup,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      text: '',
      color: '',
      items: [],
      currentItem: {},
      currentIndex: 0,
    }
  },
  computed: {
    hasSelected(): boolean {
      return !!(this.color && this.text)
    },
  },
  methods: {
    change(item, index) {
      this.color = item.color
      this.text = item.text
      this.currentIndex = index
    },
    createNew() {
      const newItem = { text: 'my new', color: '#BDBDBDFF' }
      this.items.push(newItem)
      this.color = newItem.color
      this.text = newItem.text
      this.currentIndex = this.items.length - 1
    },
    inputColor(value) {
      if (!this.hasSelected) return
      if (!this.items?.[this.currentIndex]?.color) return
      this.items[this.currentIndex].color = value
    },
    inputText(value) {
      if (!this.hasSelected) return
      if (!this.items?.[this.currentIndex]?.text) return

      this.items[this.currentIndex].text = value
    },
  },
  created() {
    // this.text = this.value ?? this.text
    // this.text = this.value ?? this.text
  },
})
</script>

<style lang="scss" scoped>
.friendly-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;

  &__config {
    width: 100%;
  }

  // &__config-items {
  //   width: 100%;
  // }
}
</style>
