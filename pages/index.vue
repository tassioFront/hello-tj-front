<template>
  <article class="container-page">
    <header class="header">
      <h1 class="header--title tj-text-panel">Hello world, TJ</h1>
      <p>
        First of all, I'm glad you came. 😁😁 I hope you find a bunch of things
        useful for you here!
      </p>
    </header>
    <div class="content">
      <KeepReading
        v-for="keepReading in keepReadings"
        :key="keepReading.id"
        :keep-reading="keepReading"
      />
      <div v-for="content in contents" :key="content.id" class="content--item">
        <h2 class="content--item-title tj-text-title">{{ content.title }}</h2>
        <p v-for="body in content.body" :key="body.text" v-text="body.text" />
      </div>
      <VListItem>
        <VIcon>
          {{ 'mdi-circle-medium' }}
        </VIcon>
        <VListItemContent>
          It has been created using the Nuxt framework, which gives all
          approaches necessary to create an SSR project.
        </VListItemContent>
      </VListItem>
      <VListItem>
        <VIcon> {{ 'mdi-circle-medium' }} </VIcon>Behind de scenes (or not at
        all), Nuxt uses Vue, the amazing User Interface Javascript framework.
      </VListItem>
      <VListItem>
        <VIcon> {{ 'mdi-circle-medium' }} </VIcon>It also has TypeScript, to
        keep our project more secure and consistent.
      </VListItem>
      <VListItem>
        <VIcon> {{ 'mdi-circle-medium' }} </VIcon>Here you will also find unit
        tests, all made with the amazing Jest.
      </VListItem>
      <VListItem>
        <VIcon> {{ 'mdi-circle-medium' }} </VIcon>Last but not least, this
        project has been using the Vuetify framework, which we can use to create
        beautyful interfaces easily.
      </VListItem>
      <VSpacer />
      <p>So, yeah! Great stack for our frontend. This gonna be awesome!</p>
      <!-- <div class="content--item">
        <h2 class="content--item-title tj-text-title">teste</h2>
        <p class="content--item-description text-justify tj-text-body">
          There is more than one reason why I have created this website. I can
          say I did it to share my knowledge as a developer. To practice
          English, once I'll create posts in that language. To build a system
          end-to-end. I mean, as a developer, it's awesome to have your project.
          Taking care of it and see it growing up, facing the challenge of
          keeping it scalable, and see how you have been improving since it has
          started. So, that is a good tip for you. Try to get an opportunity, or
          necessity, of learning something new and put it practice with other
          stuff that would be nice if you have known. But if I could nutshell
          it, would be: A blog website to practice English while I keep informed
          by SSR frameworks and BackEnd.
        </p>
        <p>
          Are you curious about it? Let's separate what this project goes
          around.
        </p>
      </div> -->

      <!-- <div class="content--item">
        <h2 class="content--item-title tj-text-title">Frontend</h2>
        <p class="content--item-description text-justify"> -->
      <!-- https://nuxtjs.org/ -->
      <!-- https://github.com/egoist/eme -->
      <!-- https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/ -->
      <!-- First, we have this awesome frontend, which has been built using Server
      Side Rendering, and, yeah, it's open-source! To be honest, all this
      project will be. Be ready for our frontend posts coming soon. -->

      <!-- It has been created using the Nuxt framework, which gives all
          approaches necessary to create an SSR project.

           Behind de scenes (or
          not at all), Nuxt uses Vue, the amazing User Interface Javascript
          framework.

          It also has TypeScript, to keep our project more secure and
          consistent.

          Here you will also find unit tests, all made with the
          amazing Jest.

          Last but not least, this project has been using the
          Vuetify framework, which we can use to create beautyful interfaces
          easily. So, yeah! Great stack for our frontend. This gonna be awesome! -->
      <!-- </p>
      </div> -->
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

// import Card from '@/components/AntiCorruption/Cards/Card.vue'
// import CardText from '@/components/AntiCorruption/Cards/CardText.vue'
// import CardActions from '@/components/AntiCorruption/Cards/CardActions.vue'
// import CardTitle from '@/components/AntiCorruption/Cards/CardTitle.vue'
import KeepReading from '@/components/Layouts/Blog/KeepReading/KeepReading.vue'
// import Btn from '@/components/AntiCorruption/Forms/Btn/Btn.vue'

export default Vue.extend({
  name: 'Hi',
  components: {
    //   Card,
    //   CardText,
    //   CardActions,
    //   CardTitle,
    KeepReading,
    // Btn,
  },
  layout: 'blog',
  data() {
    return {
      keepReadings: [
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
      ],
      contents: [
        {
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
        },
        {
          id: 'frontend',
          title: 'Frontend',
          body: [
            {
              text: `First, we have this awesome frontend, which has been built using
          Server Side Rendering, and, yeah, it's open-source! To be honest, all
          this project will be. Be ready for our frontend posts coming soon.`,
            },
          ],
        },
      ],
      // content: {
      //   id: 'system-motivation',
      //   title: 'Website Motivation',
      //   body: `
      //           There is more than one reason why I have created this website.
      //           I can say I did it to share my knowledge as a developer.
      //           To practice English, once I'll create posts in that language.
      //           To build a system end-to-end.
      //           I mean, as a developer, it's awesome to have your project.
      //           Taking care of it and see it growing up, facing the challenge of keeping it scalable,
      //            and see how you have been improving since it has started.
      //           So, that is a good tip for you.
      //           Try to get an opportunity, or necessity, of learning something new and put it practice with other stuff that would be nice if you have known.

      //           Are you curious about it? Let's separate what this project goes around.

      // First, we have this awesome frontend, which has been built using Server Side Rendering, and, yeah, it's open-source! To be honest, all this project will be.

      // Be ready to our frontend posts
      //           `,
      // },
    }
  },
  methods: {
    // parseMarkdown(markdownText) {
    //   const htmlText = markdownText
    //     .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    //     .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    //     .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    //     .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    //     .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
    //     .replace(/\*(.*)\*/gim, '<i>$1</i>')
    //     .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    //     .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
    //     .replace(/\n$/gim, '<br />')
    //   return htmlText.trim()
    // },
  },
})
</script>

<style lang="scss" scoped>
@import '~@/styles/layouts/blog/index.scss';

.header {
  margin-bottom: $space-lg;
  &--title {
    margin-bottom: $space;
  }
}

.content {
  margin-bottom: $space-md;

  &--item {
    margin-bottom: $space-md;
  }

  &--item-title {
    margin-bottom: $space-sm;
  }

  // &--keep-reading {
  //   display: flex;
  //   justify-content: flex-end;
  //   width: 100%;
  // }
}
</style>
