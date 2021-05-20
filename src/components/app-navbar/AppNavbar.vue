<template>
  <nav class="app-navbar">
    <span class="app-navbar__text">Spectral Front-End Assigment</span>
    <Button @click="handleClick">{{ this.text }}</Button>
  </nav>
</template>

<script>
import Button from "../button/Button";

export default {
  name: "app-navbar",
  components: {Button},
  data() {
    return {
      text: "Dark"
    }
  },
  methods: {
    handleClick() {
      const html = document.querySelector('html');
      html.dataset.theme = `theme-${this.text }`;
      this.text = this.text === "Dark" ? "Light" : "Dark"
    }
  }
};
</script>

<style lang="scss">
@import "styles";
</style>
