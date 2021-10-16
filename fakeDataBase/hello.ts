import { IHelloViewContent } from '~/models/Blog/Hello/IHelloViewContent'

const SYSTEM_MOTIVATION_CONTENT: IHelloViewContent = {
  id: 'system-motivation',
  title: 'Website Motivation',
  body: [
    {
      text: `
        There is more than one reason why I have created this website.
        I can say I did it to share my knowledge as a developer.
        To practice English, once I'll create posts in that language.
        To build a system end-to-end.
        I mean, as a developer, it's awesome to have your project.
        Taking care of it and see it growing up, facing the challenge of keeping it scalable,
         and see how you have been improving since it has started.
        So, that is a good tip for you.
        Try to get an opportunity, or necessity, of learning something new and put it practice with other stuff that would be nice if you have known.
        `,
    },
    {
      text: 'Are you curious about it? Let us separate what this project goes around.',
    },
  ],
}

const FRONT_CONTENT: IHelloViewContent = {
  id: 'front-end',
  title: 'Frontend',
  body: [
    {
      text: `First, we have this awesome frontend, which is open-source! To be honest, all
    this project will be. Be ready for our frontend posts coming soon.`,
    },
    {
      type: 1,
      title: 'See our stack:',
      content: [
        {
          text: 'It has been created using the <strong> Nuxt framework </strong>, which gives all approaches necessary to create an Serve Side Rendering (SSR) or Static Site Generation (SSG) project.',
          link: 'https://nuxtjs.org/',
        },
        {
          text: 'Behind de scenes (or not at all), Nuxt uses <strong>Vue</strong>, the amazing UserInterface Javascript framework.',
          link: 'https://vuejs.org/',
        },
        {
          text: 'It also has <strong>TypeScript</strong>, to keep our project more secure and consistent.',
          link: 'https://www.typescriptlang.org/',
        },
        {
          text: 'Here you will also find unit tests, all made with the amazing <strong>Jest</strong>.',
          link: 'https://jestjs.io/',
        },
        {
          text: ' Last but not least, this project has been using the <strong>Vuetify framework</strong>, which we can use to create beautyful interfaces easily.',
          link: 'https://vuetifyjs.com/en/introduction/why-vuetify/',
        },
      ],
    },
    {
      text: 'So, yeah! Great stack for our frontend. This gonna be awesome!',
    },
  ],
}

const BACK_CONTENT: IHelloViewContent = {
  id: 'back-end',
  title: 'Backend',
  body: [
    {
      text: `
      Regarding Backend... To be honest, my main idea about creating a Backend is for practicing it.
      So, I could easily use some Content Management Systems (CMS) and focus only on the content itself. But while my website grows up,
      I believe that it can need some nice features,  which can bring us nice experiences on BackEnd.`,
    },
    {
      type: 1,
      title: 'See our stack:',
      content: [
        {
          text: 'It also has <strong>TypeScript</strong> and <strong>Jest</strong>, as the Frontend.',
        },
        {
          text: 'It has been created using <strong>Nodejs</strong>, to be able to use our incredible javascript on Backend.',
          link: 'https://nodejs.dev/',
        },
      ],
    },
  ],
}
export const keepReadings = [
  {
    id: 'simple-words',
    title: 'Myself - In simple words',
    body: `
      Hi, I'm Tássio Jordão (TJ), a Chemical with Front-End experience.
      Actually, I'm a Frontend developer with some Chemistry knowledge. That
      decision (changing from chemistry to coding) was in 2018 when I had
      contact with VBA (programming language) in an old professional
      experience - for those who don't know VBA is to do automatic tasks in
      Excel - , at that moment I noticed as I love coding. After talking with
      some friends from this area, I decided to become a Front End developer.
      It was in 2019 January. And, after 6 months of studying hard, I got my
      first opportunity on a website about recipes. It was an awesome
      achievement and fired up me to keep in this new area.`,
    action: {
      title: 'Keep reading',
      link: '/about',
    },
  },
]

export const contents = [SYSTEM_MOTIVATION_CONTENT, FRONT_CONTENT, BACK_CONTENT]
