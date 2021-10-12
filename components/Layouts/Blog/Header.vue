<template>
  <div>
    <VNavigationDrawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <VList>
        <VListItem
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <VListItemAction>
            <VIcon>{{ item.icon }}</VIcon>
          </VListItemAction>
          <VListItemContent>
            <VListItemTitle v-text="item.title" />
          </VListItemContent>
        </VListItem>
      </VList>
    </VNavigationDrawer>

    <VAppBar :clipped-left="clipped" fixed app>
      <VAppBarNavIcon @click.stop="drawer = !drawer" />
      <VSpacer />
      <VToolbarTitle v-text="title" />
    </VAppBar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BlogHeader',
  data() {
    return {
      clipped: false,
      drawer: null,
      items: [
        {
          icon: 'mdi-apps',
          title: 'TJ',
          to: '/tj',
        },
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/hello',
        },
        {
          icon: 'mdi-apps',
          title: 'About me',
          to: '/about',
        },
        {
          icon: 'mdi-apps',
          title: 'Posts',
          to: '/posts',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Hello TJ',
    }
  },
})
</script>
