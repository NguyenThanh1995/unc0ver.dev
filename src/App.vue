<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>
<script>
  import AppHeader from "@/components/AppHeader"
  export default {
    name: "app",
    components: { AppHeader }
  }
</script>
<style lang="scss">
  @import "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700";

  @font-face {
    font-family: "Chocolate";
    src: url(~@/fonts/Paintingwithchocolate-K5mo.ttf);
    font-weight: 400;
  }

  p {
    max-width: 600px;
  }

  * {
    font-family: -apple-system-font, BlinkMacSystemFont, "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    position: relative;
    display: block;
    width: 100%;
  }

  body {
    background-color: rgb(22, 22, 22);
  }
  #app {
    min-height: 100%;
  }
  a {
    text-decoration: none;
  }
</style>