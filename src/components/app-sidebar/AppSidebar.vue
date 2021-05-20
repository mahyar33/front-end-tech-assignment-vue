<template>
  <aside class="app-sidebar">
    <ul class="app-sidebar__menu">
      <app-sidebar-link
        v-for="(item, key) in items"
        :key="key"
        :item="item"
        :space="0"
      />
    </ul>
  </aside>
</template>

<script>
import AppSidebarLink from "@/components/app-sidebar-link/AppSidebarLink";


export default {
  name: "app-sidebar",
  components: {
    AppSidebarLink,
  },
  props: {
    items: Array,
  },

};
</script>

<style lang="scss">
@import "styles";
</style>
