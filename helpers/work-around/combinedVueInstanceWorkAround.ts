/**
 * @param vm: Vue instance (this)
 * @returns vm as any
 * @description It's necessary to work around this issue: https://vuejs.github.io/vetur/guide/FAQ.html#property-xxx-does-not-exist-on-type-combinedvueinstance
 */
export const combinedVueInstanceWorkAround = (vm: Vue) => {
  return vm as any
}
