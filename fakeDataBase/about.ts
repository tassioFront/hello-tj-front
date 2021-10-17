import { keepReadings } from './hello'
import { IAboutViewContent } from '~/models/Blog/About/IAboutViewContent'

const INTRODUCTION: IAboutViewContent = {
  id: 'intro',
  title: 'Introduction',
  body: [
    {
      text: keepReadings[0].body,
    },
  ],
}

const BREAK_ICE: IAboutViewContent = {
  id: 'break-ice',
  title: 'Just to break the ice - what I do for fun',
  body: [
    {
      text: `For sure that's a good one! So, I love wines🍷.`,
    },
    {
      text: `It's a recent love and
  hobby, which happened when my wife and I went to a winery here in São
  Paulo. Since now, I like to read about wines and share them with
  friends. And yeah, catching up with friends is another one!`,
    },
    {
      text: `I love
  pets too, dogs to be more specific. I like to travel with my wife. We
  like to know calm places and to have an awesome breakfast.`,
    },
  ],
}

const HARD_SKILLS: IAboutViewContent = {
  id: 'hard-skills',
  title: 'Hard Skills',
  body: [
    {
      type: 2,
      title: 'I have been working with:',
      content: [
        {
          text: 'HTML',
          color: 'purple darken-1',
        },
        {
          text: 'CSS',
          color: 'light-blue darken-1',
        },
        {
          text: 'JavaScript',
          color: 'yellow',
        },
        {
          text: 'Vue 2 (Vuex and VueRouter)',
          color: 'green darken-1',
        },

        {
          text: 'Sass',
          color: 'pink darken-1',
        },
        {
          text: 'TypeScript',
          color: 'blue darken-1',
        },
        {
          text: 'Jest',
          color: 'deep-orange darken-1',
        },
        {
          text: 'Vuetify',
          color: 'light-blue darken-1',
        },
      ],
    },
    {
      type: 2,
      title: 'I worked with:',
      content: [
        {
          text: 'Tailwind',
          color: 'teal darken-1',
        },
        {
          text: 'Firebase',
          color: 'orange darken-1',
        },
      ],
    },
    {
      type: 2,
      title: 'I had contact in personal projects',
      content: [
        {
          text: 'React',
          color: 'deep-purple darken-1',
        },
        {
          text: 'Vue 3',
          color: 'green darken-1',
        },
        {
          text: 'Nuxt',
          color: 'teal darken-1',
        },
        {
          text: 'Node',
          color: 'green darken-2',
        },
      ],
    },
  ],
}

const SOFT_SKILLS: IAboutViewContent = {
  id: 'soft-skills',
  title: 'Soft Skills',
  body: [
    {
      text: `I'm an easy-going person who likes to share what I have been learning.`,
    },
    {
      type: 2,
      content: [
        {
          text: 'User Experience first',
          color: 'cyan lighten-1',
          contrast: 'black',
          icon: 'mdi-clipboard-account',
        },
        {
          text: 'Effective listener',
          color: 'cyan lighten-1',
          contrast: 'black',
          icon: 'mdi-account-tie-voice',
        },
        {
          text: 'Clear communication',
          color: 'cyan lighten-1',
          contrast: 'black',
          icon: 'mdi-account-multiple',
        },
        {
          text: 'Attentive',
          color: 'cyan lighten-1',
          contrast: 'black',
          icon: 'mdi-phone-outline',
        },
        {
          text: 'Professional',
          color: 'cyan lighten-1',
          contrast: 'black',
          icon: 'mdi-account-tie',
        },
        {
          text: 'Empathetic',
          color: 'cyan lighten-1',
          contrast: 'black',
          icon: 'mdi-hand-heart-outline',
        },
      ],
    },
  ],
}

const EXPERIENCES: IAboutViewContent = {
  id: 'experiences',
  title: 'My experiences',
  body: [
    {
      type: 3,
      content: [
        {
          text: '<strong>Frontend Engineer</strong> @Juntos Somos Mais',
          caption: 'Since 2020 Mar',
        },
        {
          text: '<strong>Frontend Engineer</strong> @CyberCook',
          caption: '2019 Jun to 2020 Mar',
        },
        {
          text: '<strong>Sensory Analyst and Information Technology</strong> @Sensenova',
          caption: 'Oct 2017 to Jun 2019',
        },
        {
          text: '<strong>Intern (chemistry)</strong> @Givaudan Brazil',
          caption: 'Jul 2016 to Sep 2017',
        },
        {
          text: '<strong>Laboratory technician and information technology assistant</strong> @Santo Ivo School',
          caption: 'Jan 2014 to Jul 2016',
        },
        {
          text: '<strong>Intern (information technology)</strong> @FUNDAP',
          caption: 'Feb 2012 to Feb 2013 ',
        },
      ],
    },
  ],
}
export const contents: IAboutViewContent[] = [
  INTRODUCTION,
  BREAK_ICE,
  HARD_SKILLS,
  SOFT_SKILLS,
  EXPERIENCES,
]
