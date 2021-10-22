<template>
  <v-expansion-panel class="px-5 py-5">
    <h3 class="title mb-4">Content scope</h3>
    <v-expansion-panel-header
      >{{ scopedPanel.title || 'create' }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <Input v-model="scopedPanel.title" label="Name" placeholder="name" />
      <div v-if="scopedPanel.body.length">
        <div
          v-for="(content, contentIndex) in scopedPanel.body"
          :key="contentIndex"
        >
          <v-combobox
            v-model="content.type"
            :items="['SimpleText']"
            label="Type"
            outlined
            dense
          ></v-combobox>
          <!-- @change="selectType(content.select, index, contentIndex)" -->
          <component
            :is="content.type"
            v-if="content.type"
            @updateValue="content.value = $event"
          />
        </div>
      </div>
      <br />

      <Btn @click="addNew()"> add</Btn>
      <br />

      <Btn @click="updatePanel()"> Save</Btn>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script lang="ts">
import Vue from 'vue'

import SimpleText from '@/components/Layouts/Admin/SimpleText/SimpleText.vue'
import Btn from '@/components/AntiCorruption/Forms/Btn/Btn.vue'
import Input from '@/components/AntiCorruption/Forms/Input/Input.vue'

export default Vue.extend({
  name: 'ContentFactoryItem',
  components: {
    SimpleText,
    Btn,
    Input,
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
        body: [],
      },
    }
  },
  created() {
    // if (this.panel.title) {
    // this.scopedPanel = this.panel
    // }
  },
  methods: {
    addNew() {
      this.scopedPanel.body.push({})
    },
    // selectType(select, index, contentIndex) {
    //   console.log(select)
    //   this.panels[index].body[contentIndex].type = select
    // },
    updatePanel() {
      this.$emit('update:panel', this.scopedPanel)
      this.$emit('update', this.scopedPanel)
    },
  },
})
</script>
