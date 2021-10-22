<template>
  <v-expansion-panel class="px-5 py-5 content-factory-item">
    <h3 class="title mb-4">Content scope</h3>
    <v-expansion-panel-header
      >{{ scopedPanel.title || 'My new content' }}
    </v-expansion-panel-header>
    <v-expansion-panel-content class="content-factory-item__content">
      <Input
        v-model="scopedPanel.title"
        label="Content title"
        placeholder="Define the content title"
        focus
      />
      <div>
        <div v-if="scopedPanel.body.length">
          <div
            v-for="(content, contentIndex) in scopedPanel.body"
            :key="contentIndex"
            class="content-factory-item__content-box my-10 px-5 py-5"
          >
            <Combobox
              v-model="content.type"
              :items="items"
              label="Define the content type"
              outlined
              dense
            />
            <component
              :is="content.type"
              v-if="content.type"
              @updateValue="content.value = $event"
            />
          </div>
        </div>
        <div class="content-factory-item__actions my-7">
          <Btn color="secondary" @click="addNew()"> add type content</Btn>
          <Btn color="primary" @click="updatePanel()"> Save content</Btn>
        </div>
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script lang="ts">
import Vue from 'vue'

import SimpleText from '@/components/Layouts/Admin/SimpleText/SimpleText.vue'
import Btn from '@/components/AntiCorruption/Forms/Btn/Btn.vue'
import Combobox from '@/components/AntiCorruption/Forms/Combobox/Combobox.vue'
import Input from '@/components/AntiCorruption/Forms/Input/Input.vue'
import Card from '@/components/AntiCorruption/Cards/Card.vue'
// [{"body":[{"type":"SimpleText","value":"my "}],"title":"New"}]
interface PanelBody {
  type: 'SimpleText'
  valeu: unknown
}
interface Panel {
  title: string
  body: PanelBody[]
}
export default Vue.extend({
  name: 'ContentFactoryItem',
  components: {
    SimpleText,
    Btn,
    Input,
    Combobox,
    Card,
  },
  props: {
    panel: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      scopedPanel: {
        title: '',
        body: [],
      } as Panel,
      items: ['SimpleText'],
    }
  },
  created() {
    // if (this.panel.title) {
    // this.scopedPanel = this.panel
    // }
  },
  methods: {
    addNew() {
      this.scopedPanel.body.push({} as PanelBody)
    },
    updatePanel() {
      this.$emit('update:panel', this.scopedPanel)
      this.$emit('update', this.scopedPanel)
    },
  },
})
</script>

<style lang="scss" scoped>
.content-factory-item {
  &__content-box {
    border: 1px solid #eceff1;
    border-radius: 4px;
  }
  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
