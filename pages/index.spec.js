import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueHtmlSecure from 'vue-html-secure'
import Hello from '@/pages/index.vue'

const localVue = createLocalVue()
Vue.use(Vuetify)
localVue.use(VueHtmlSecure)

const TESTIDS = {
  simpleWords: '[data-testid="simple-words"]',
  simpleWordsTitle: '[data-testid="simple-words-title"]',
  simpleWordsBody: '[data-testid="simple-words-body"]',
}

let vuetify
let wrapper

describe('Hello view', () => {
  beforeEach(() => {
    vuetify = new Vuetify()
    wrapper = mount(Hello, {
      localVue,
      shallow: true,
      vuetify,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
  })

  it('Should render Hello view with simple-words content', () => {
    const simpleWord = wrapper.find(TESTIDS.simpleWords)
    const simpleWordTitle = wrapper.find(TESTIDS.simpleWordsTitle)
    const simpleWordBody = wrapper.find(TESTIDS.simpleWordsBody)
    expect(simpleWord.exists()).toBeTruthy()
    expect(simpleWordTitle.text()).toBe(wrapper.vm.contents[0].title)
    expect(simpleWordBody.text()).not.toBe('')
  })
})
