import { RouterLinkStub, Wrapper } from '@vue/test-utils'
import Hello from '../index.vue'
import { testSetup } from '~/anti-corruption/vue-test-utils'

const TESTIDS = {
  simpleWords: '[data-testid="simple-words"]',
  simpleWordsTitle: '[data-testid="simple-words-title"]',
  simpleWordsBody: '[data-testid="simple-words-body"]',
  simpleWordsAction: '[data-testid="simple-words-action-/about"]',
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

  it('Should render Hello view with simple-words content', () => {
    const simpleWord = wrapper.find(TESTIDS.simpleWords)
    const simpleWordTitle = wrapper.find(TESTIDS.simpleWordsTitle)
    const simpleWordBody = wrapper.find(TESTIDS.simpleWordsBody)
    const simpleWordAction = wrapper.find(TESTIDS.simpleWordsAction)
    expect(simpleWord.exists()).toBeTruthy()
    expect(simpleWordTitle.text()).toBe(wrapper.vm.contents[0].title)
    expect(simpleWordBody.text()).not.toBe('')
    expect(
      simpleWordAction.html().includes(wrapper.vm.contents[0].action.link)
    ).toBeTruthy()
  })
})
