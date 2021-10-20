import { componentTagValidator } from '../helloComponentsValidatior'

describe('componentTagValidator', () => {
  it('Should return component name by index code', () => {
    const DEFAULT_TAG_INDEX = 0
    const FIND_MORE_INFO_LIST_COMPONENT_INDEX = 1
    const FRIENDLY_LIST_INDEX = 2
    const MIS_EXIST_INDEX = 99

    expect(componentTagValidator(DEFAULT_TAG_INDEX)).toBe('p')
    expect(componentTagValidator(FIND_MORE_INFO_LIST_COMPONENT_INDEX)).toBe(
      'FindMoreInfoList'
    )
    expect(componentTagValidator(FRIENDLY_LIST_INDEX)).toBe('FriendlyList')
    expect(componentTagValidator(MIS_EXIST_INDEX)).toBe('p')
  })
})
