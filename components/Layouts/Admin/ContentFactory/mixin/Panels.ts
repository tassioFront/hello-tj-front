// import {
//   ExtendedVue,
//   Vue,
//   CombinedVueInstance,
//   VueConstructor,
// } from 'vue/types/vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'PanelsMixin',
  data() {
    return {
      panels: [],
    }
  },
  methods: {
    // addNew() {
    //   this.panels.push({})
    // },
    // update(newValue: any, index: number) {
    //   if (this.panels[index]) {
    //     this.panels[index] = newValue
    //   }
    // },
  },
})
