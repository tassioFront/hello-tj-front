import { HelloComponents } from '~/enums/Blog/HelloComponents'

export type componentTagValidatorParams = 'LongText' | 'SimpleText'

export const componentTagValidator = (
  index: componentTagValidatorParams
): HelloComponents | string => {
  const DEFAULT_TAG = 'p'
  return HelloComponents[index] || DEFAULT_TAG
}
