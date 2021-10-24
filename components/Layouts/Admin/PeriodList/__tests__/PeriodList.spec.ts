import { Wrapper } from '@vue/test-utils'
import PeriodList from '../PeriodList.vue'
import { testSetup } from '~/anti-corruption/vue-test-utils'
import { PeriodListValue } from '~/models/Admin/Factories/PeriodListValue'

const TESTIDS = {
  chip: '[data-testid="period-list__item"]',
  input: '[data-testid="period-list__input--text"]',
  inputCaption: '[data-testid="period-list__input--caption"]',
  colorPicker: '[data-testid="period-list__color-picker"]',
}

const MOCK: PeriodListValue[] = [
  {
    text: 'Front 2',
    caption: 'cap',
    color: 'color',
  },
  {
    text: 'Front',
    caption: 'cap 2',
    color: 'color2',
  },
]

describe('PeriodList', () => {
  let wrapper: Wrapper<any>
  beforeEach(() => {
    wrapper = testSetup(PeriodList, {}, true)
  })

  it('Should render empty state', () => {
    const chip = wrapper.findAll(TESTIDS.chip)
    const input = wrapper.find(TESTIDS.input)
    const inputCaption = wrapper.find(TESTIDS.inputCaption)
    const colorPicker = wrapper.find(TESTIDS.colorPicker)
    expect(chip.length).toBe(0)
    expect(input.attributes().disabled).toBeTruthy()
    expect(inputCaption.attributes().disabled).toBeTruthy()
    expect(colorPicker.attributes().disabled).toBeTruthy()
  })

  it('Should create first timeline', async () => {
    expect(wrapper.vm.items.length).toBe(0)
    expect(wrapper.vm.color).toBe('')
    expect(wrapper.vm.text).toBe('')
    expect(wrapper.vm.caption).toBe('')
    wrapper.vm.createNew()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.items.length).toBe(1)
    expect(wrapper.vm.currentIndex).toBe(0)
    expect(wrapper.vm.color).not.toBe('')
    expect(wrapper.vm.text).not.toBe('')
    expect(wrapper.vm.aption).not.toBe('')

    const chip = wrapper.findAll(TESTIDS.chip)
    const input = wrapper.find(TESTIDS.input)
    const colorPicker = wrapper.find(TESTIDS.colorPicker)
    expect(chip.length).toBe(1)
    expect(input.attributes().disabled).toBeUndefined()
    expect(colorPicker.attributes().disabled).toBeUndefined()
  })

  it('Should change state', async () => {
    wrapper.vm.updateValue = jest.fn()
    wrapper.vm.inputData('color', 'new color')
    expect(() => wrapper.vm.items[1].color).toThrowError()
    wrapper.vm.inputData('text', 'back')
    expect(() => wrapper.vm.items[1].text).toThrowError()
    wrapper.vm.inputData('caption', 'my cap')
    expect(() => wrapper.vm.items[1].caption).toThrowError()
    expect(wrapper.vm.updateValue).not.toBeCalled()

    wrapper.vm.items = MOCK
    wrapper.vm.change(MOCK[1], 1)
    expect(wrapper.vm.color).toBe(MOCK[1].color)
    expect(wrapper.vm.text).toBe(MOCK[1].text)
    expect(wrapper.vm.currentIndex).toBe(1)

    wrapper.vm.inputData('color', 'new color')
    expect(wrapper.vm.items[1].color).toBe('new color')

    wrapper.vm.inputData('text', 'back')
    expect(wrapper.vm.items[1].text).toBe('back')

    wrapper.vm.inputData('caption', '2021')
    expect(wrapper.vm.items[1].caption).toBe('2021')
    expect(wrapper.vm.updateValue).toBeCalledTimes(3)
  })
})
