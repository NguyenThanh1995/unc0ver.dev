<template>
  <div id="app">
    <router-view />
    <component is="style" v-if="$store.state.isDarkMode">
      :root {
        --color-secondary: rgb(255, 255, 255, .15);
        --color-primary: rgb(1, 112, 225);
        --color-white: #fff;
        --color-white-65: rgba(255, 255, 255, .65);
        --color-primary: rgb(1, 112, 255);
        --color-white-075: rgba(255, 255, 255, .075);
        --color-white-15: rgba(255, 255, 255, .15);
        --brightness-lighter: .4;
        --brightness: .25;
        --bg-dark: rgb(22, 22, 22);
        --bg-dark2: rgb(30, 30, 30);
      }
    </component>
    <component is="style" v-else>
      :root {
        --color-secondary: rgb(0, 0, 0, .15);
        --color-primary: rgb(1, 112, 225);
        --color-white: #000;
        --color-white-65: rgba(0, 0, 0, .65);
        --color-primary: rgb(1, 112, 255);
        --color-white-075: rgba(0, 0, 0, .075);
        --color-white-15: rgba(0, 0, 0, .15);
        --brightness-lighter: 2.8;
        --brightness: 1.1;
        --bg-dark: rgb(248, 249, 250);
        --bg-dark2: #fff;
      }
    </component> 
  </div>
</template>
<script>
  export default {
    name: "app"
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
    background-color: $bg-dark;
  }

  #app {
    min-height: 100%;
  }

  a {
    text-decoration: none;
  }
</style>