<template>
  <article>
    <header class="header">
      <img src="" alt="" />
      <h1 class="header--title tj-text-panel">Hello world, TJ</h1>
      <p>
        First of all, I'm glad you came. 😁😁 I hope you find a bunch of things
        useful for you here!
      </p>
    </header>
    <Card
      v-for="content in contents"
      :key="content.id"
      dark
      class="content"
      :data-testid="content.id"
    >
      <CardTitle :data-testid="content.id + '-title'">
        <h2 class="content--title tj-text-title">{{ content.title }}</h2>
      </CardTitle>

      <CardText
        v-html-safe="content.body"
        :data-testid="content.id + '-body'"
        class="text-justify"
      >
      </CardText>
      <CardActions :data-testid="content.id + `-action-${content.action.link}`">
        <div class="content--keep-reading">
          <Btn capitalize color="primary" plain>
            <NuxtLink tag="div" :to="content.action.link">
              {{ content.action.title }}
              <VIcon right dark> {{ 'mdi-arrow-right' }} </VIcon></NuxtLink
            >
          </Btn>
        </div>
      </CardActions>
    </Card>
    <div>
      <h2 class="tj-text-title">This system motivation</h2>
      <p>any motivation about I have created this website</p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import Card from '@/components/anti-corruption/Cards/Card.vue'
import CardText from '@/components/anti-corruption/Cards/CardText.vue'
import CardActions from '@/components/anti-corruption/Cards/CardActions.vue'
import CardTitle from '@/components/anti-corruption/Cards/CardTitle.vue'
import Btn from '@/components/anti-corruption/Forms/Btn/Btn.vue'

interface IAction {
  title: string
  link: string
}

interface IContent {
  id: string
  title: string
  body: string
  action: IAction
}

export default Vue.extend({
  name: 'Hi',
  components: {
    Card,
    CardText,
    CardActions,
    CardTitle,
    Btn,
  },
  layout: 'blog',
  data() {
    return {
      contents: [
        {
          id: 'simple-words',
          title: 'Me - In simple words',
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
            achievement and fired up me to keep in this new area. I have been
            working at the
            <VBtn
              style="padding: 0"
              color="secondary"
              small
              plain
              href="https://github.com/juntossomosmais"
            >
              Juntos Somos Mais
            </VBtn>
            company since 2020, as a Front End developer too.`,
          action: {
            title: 'Keep reading',
            link: '/about',
          },
        },
      ] as IContent[],
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
    margin-bottom: $space-sm;
  }
}

.content {
  margin-bottom: $space-md;
  &--title {
    margin-bottom: $space-xs;
  }
  &--keep-reading {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
}
</style>
