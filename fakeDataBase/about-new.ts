const INTRODUCTION = {
  id: 'intro',
  title: 'Introduction',
  body: [
    {
      type: 'LongText',
      value: `Hi, I'm Tássio Jordão (TJ), a Chemical with Front-End experience.
          Actually, I'm a Frontend developer with some Chemistry knowledge. That
          decision (changing from chemistry to coding) was in 2018 when I had
          contact with VBA (programming language) in an old professional
          experience - for those who don't know VBA is to do automatic tasks in
          Excel - , at that moment I noticed as I love coding. After talking with
          some friends from this area, I decided to become a Front End developer.
          It was in 2019 January. And, after 6 months of studying hard, I got my
          first opportunity on a website about recipes. It was an awesome
          achievement and fired up me to keep in this new area.`,
    },
  ],
}

const BREAK_ICE = {
  id: 'break-ice',
  title: 'Just to break the ice - what I do for fun',
  body: [
    {
      type: 'SimpleText',
      value: `For sure that's a good one! So, I love wines🍷.`,
    },
    {
      type: 'LongText',
      value: `It's a recent love and
  hobby, which happened when my wife and I went to a winery here in São
  Paulo. Since now, I like to read about wines and share them with
  friends. And yeah, catching up with friends is another one!`,
    },
    {
      type: 'SimpleText',
      value: `I love
  pets too, dogs to be more specific. I like to travel with my wife. We
  like to know calm places and to have an awesome breakfast.`,
    },
  ],
}

const HARD_SKILLS = {
  id: 'hard-skills',
  title: 'Hard Skills',
  body: [
    {
      type: 'FriendlyList',
      title: 'I have been working with:',
      value: [
        {
          text: 'HTML',
          color: 'purple',
        },
        {
          text: 'CSS',
          color: 'light-blue',
        },
        {
          text: 'JavaScript',
          color: 'yellow',
        },
        {
          text: 'Vue 2 (Vuex and VueRouter)',
          color: 'green',
        },

        {
          text: 'Sass',
          color: 'pink',
        },
        {
          text: 'TypeScript',
          color: '#039BE5FF',
        },
        {
          text: 'Jest',
          color: 'deep-orange',
        },
        {
          text: 'Vuetify',
          color: 'light-blue',
        },
      ],
    },
    {
      type: 'FriendlyList',
      title: 'I worked with:',
      value: [
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
      type: 'FriendlyList',
      title: 'I had contact in personal projects',
      value: [
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

const SOFT_SKILLS = {
  id: 'soft-skills',
  title: 'Soft Skills',
  body: [
    {
      type: 'SimpleText',
      value: `I'm an easy-going person who likes to share what I have been learning.`,
    },
    {
      type: 'FriendlyList',
      value: [
        {
          text: 'User Experience first',
          color: '#26C6DAFF',
          contrast: 'black',
          icon: 'mdi-clipboard-account',
        },
        {
          text: 'Effective listener',
          color: '#26C6DAFF',
          contrast: 'black',
          icon: 'mdi-account-tie-voice',
        },
        {
          text: 'Clear communication',
          color: '#26C6DAFF',
          contrast: 'black',
          icon: 'mdi-account-multiple',
        },
        {
          text: 'Attentive',
          color: '#26C6DAFF',
          contrast: 'black',
          icon: 'mdi-phone-outline',
        },
        {
          text: 'Professional',
          color: '#26C6DAFF',
          contrast: 'black',
          icon: 'mdi-account-tie',
        },
        {
          text: 'Empathetic',
          color: '#26C6DAFF',
          contrast: 'black',
          icon: 'mdi-hand-heart-outline',
        },
      ],
    },
  ],
}

const EXPERIENCES = {
  id: 'experiences',
  title: 'My experiences',
  body: [
    {
      type: 'PeriodList',
      value: [
        {
          text: '<strong>Frontend Engineer</strong> @Juntos Somos Mais',
          caption: 'Since 2020 Mar',
          color: '#26C6DAFF',
        },
        {
          text: '<strong>Frontend Engineer</strong> @CyberCook',
          caption: '2019 Jun to 2020 Mar',
          color: '#26C6DAFF',
        },
        {
          text: '<strong>Sensory Analyst and Information Technology</strong> @Sensenova',
          caption: 'Oct 2017 to Jun 2019',
          color: '#26C6DAFF',
        },
        {
          text: '<strong>Intern (chemistry)</strong> @Givaudan Brazil',
          caption: 'Jul 2016 to Sep 2017',
          color: '#26C6DAFF',
        },
        {
          text: '<strong>Laboratory technician and information technology assistant</strong> @Santo Ivo School',
          caption: 'Jan 2014 to Jul 2016',
          color: '#26C6DAFF',
        },
        {
          text: '<strong>Intern (information technology)</strong> @FUNDAP',
          caption: 'Feb 2012 to Feb 2013 ',
          color: '#26C6DAFF',
        },
      ],
    },
  ],
}

export const data = {
  title: 'About me',
  intro: 'Please, get a coffee and make yourself at home.',
  contents: [INTRODUCTION, BREAK_ICE, HARD_SKILLS, SOFT_SKILLS, EXPERIENCES],
}
