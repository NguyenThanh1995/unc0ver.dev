import eruda from "eruda"
eruda.init()

import Vue from "vue"
import App from "./App"
import router from "./plugins/router"
import store from "./plugins/store"
import Wow from "vue-wow"
import VueScrollTo from "vue-scrollto"
import "animate.css"
import "./scss/animate-lite.scss"

Vue.use(Wow)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

const match = (navigator.appVersion).split("OS ")

Vue.prototype.iOSVersion = match && match.length > 1 ? match[1].split(" ")[0].replace("_", ".") : ""


new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});