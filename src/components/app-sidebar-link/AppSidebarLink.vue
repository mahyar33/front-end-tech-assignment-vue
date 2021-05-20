<template>
  <li
      class="app-sidebar-link"
      @click.stop.prevent="toggle"
  >
    <div
        class="app-sidebar-link__item"
        @click="handleClick(item)"
        :class="{ active: item.id === currentAsset}"
    >
      <div class="app-sidebar-link__item-title" :style="computedLinkStyles">
        <template v-if="item.children && item.children.length > 0">
          <i v-if="open" class="app-sidebar-link__icon down"></i>
          <i v-else class="app-sidebar-link__icon right"></i>
        </template>
        <div>{{ item.name }}</div>
      </div>
    </div>
    <ul class="app-sidebar-link__list" v-if="item.children && item.children.length > 0" v-show="open">
      <app-sidebar-link
          v-for="(item, index) in item.children"
          :key="index"
          :item="item"
          :space="space + 20"
      >
      </app-sidebar-link>
    </ul>
  </li>
</template>

<script>


import {mapActions} from "vuex";

export default {
  name: "app-sidebar-link",
  props: {
    item: Object,
    space: Number,
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    computedLinkStyles() {
      const style = {};
      style.marginLeft = `${this.space}px`;
      return style;
    },
    currentAsset() {
      return this.$store.getters.getCurrentAsset
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    handleClick(item) {
      this.setCurrentAsset(item.id)
      this.fetchMeasurements(item.id)
      this.setIsAggregated(item.children && item.children.length > 0)

    },
    ...mapActions([
      'setCurrentAsset',
      'fetchMeasurements',
      "setIsAggregated"
    ]),
  },
};
</script>

<style lang="scss">
@import "styles";
</style>
