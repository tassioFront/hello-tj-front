<template>
  <article>
    <header class="header">
      <img src="" alt="" />
      <h1 class="tj-text-panel">Hello world, TJ</h1>
    </header>
    <div class="content">
      <h2 class="content--title tj-text-title">Me - In simple words</h2>
      <p class="text-justify">
        Hi, I'm a Chemical with Front-End experience 😁 Actually, I'm a Frontend
        developer with some Chemistry knowledge. That decision (changing from
        chemistry to coding) was in 2018 when I had contact with VBA
        (programming language) in an old professional experience - for those who
        don't know VBA is to do automatic tasks in Excel, at that moment I
        noticed as I love coding. After talking with some friends from this
        area, I decided to become a Front End developer. It was in 2019 January.
        And, after 6 months of studying hard, I got my first opportunity on a
        website about recipes. It was an awesome achievement and fired up me to
        keep in this new area. I have been working in a new amazing company
        since 2020, as a Front End developer too.
      </p>
    </div>
    <div>
      <h2 class="tj-text-title">This system motivation</h2>
      <p>any motivation about I have created this website</p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Hello',
  layout: 'blog',
})
</script>

<style lang="sass" scoped>
@import "~@/styles/layouts/blog/variables.scss"

.header
  margin-bottom: $space-lg

.content
  margin-bottom: $space-md

  &--title
    margin-bottom: $space-sm
</style>
