import { HelloComponents } from '~/enums/Blog/HelloComponents'

export const componentTagValidator = (
  index: number
): HelloComponents | string => {
  const DEFAULT_TAG = 'p'
  return HelloComponents[index] || DEFAULT_TAG
}
