<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: "app",
  created() {
    const html = document.querySelector('html');
    html.dataset.theme = `theme-Light`;
  }
};
</script>
<style lang="scss">
:root[data-theme="theme-Light"] {
  --primary-color: #49afd9;
  --text-color: #2b3940;
  --icon-color: #2b3940;
  --bg-color: #eeeeee;
  --component-bg-color: #ffffff;
}

:root[data-theme="theme-Dark"] {
  --primary-color: #0072a3;
  --text-color: #eff0f1;
  --icon-color: #eff0f1;
  --bg-color: #212121;
  --component-bg-color: #2b3940;
}

body {
  margin: unset;
  background-color: var(--bg-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
