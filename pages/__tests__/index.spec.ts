import { RouterLinkStub, Wrapper } from '@vue/test-utils'
import Hello from '../index.vue'
import { testSetup } from '~/anti-corruption/vue-test-utils'

const TESTIDS = {
  simpleWords: '[data-testid="simple-words"]',
  simpleWordsTitle: '[data-testid="simple-words-title"]',
  simpleWordsBody: '[data-testid="simple-words-body"]',
  simpleWordsAction: '[data-testid="simple-words-action-/about"]',

  systemMotivationTitle: '[data-testid="system-motivation-title"]',
  systemMotivationContent: '[data-testid="system-motivation-content"]',

  frontTitle: '[data-testid="front-end-title"]',
  frontContent: '[data-testid="front-end-content"]',

  backTitle: '[data-testid="back-end-title"]',
  backContent: '[data-testid="back-end-content"]',
}
let wrapper: Wrapper<any>

describe('Hello view', () => {
  beforeEach(() => {
    wrapper = testSetup(Hello, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
  })

  it('Should render Hello view with KeepReadings and Contents', () => {
    // keepReading
    const simpleWord = wrapper.find(TESTIDS.simpleWords)
    const simpleWordTitle = wrapper.find(TESTIDS.simpleWordsTitle)
    const simpleWordBody = wrapper.find(TESTIDS.simpleWordsBody)
    const simpleWordAction = wrapper.find(TESTIDS.simpleWordsAction)
    expect(simpleWord.exists()).toBeTruthy()
    expect(simpleWordTitle.text()).toBe(wrapper.vm.keepReadings[0].title)
    expect(simpleWordBody.text()).not.toBe('')
    expect(
      simpleWordAction.html().includes(wrapper.vm.keepReadings[0].action.link)
    ).toBeTruthy()

    //contents
    // system motivation
    const systemMotivationTitle = wrapper.find(TESTIDS.systemMotivationTitle)
    const systemMotivationContent = wrapper.findAll(
      TESTIDS.systemMotivationContent
    )
    expect(systemMotivationTitle.text()).toBe(wrapper.vm.contents[0].title)
    expect(systemMotivationContent.length).toBe(
      wrapper.vm.contents[0].body.length
    )
    const frontTitle = wrapper.find(TESTIDS.frontTitle)
    const frontContent = wrapper.findAll(TESTIDS.frontContent)
    expect(frontTitle.text()).toBe(wrapper.vm.contents[1].title)
    expect(frontContent.length).toBe(wrapper.vm.contents[1].body.length)

    const backTitle = wrapper.find(TESTIDS.backTitle)
    const backContent = wrapper.findAll(TESTIDS.backContent)
    expect(backTitle.text()).toBe(wrapper.vm.contents[2].title)
    expect(backContent.length).toBe(wrapper.vm.contents[2].body.length)
  })
})
