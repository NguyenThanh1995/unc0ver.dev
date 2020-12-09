import eruda from "eruda"
eruda.init()

import Vue from "vue"
import App from "./App"
import router from "./plugins/router"
import Wow from "vue-wow"
import "animate.css"
import "./scss/animate-lite.scss"

Vue.use(Wow)

const match = (navigator.appVersion).split("OS ")

Vue.prototype.iOSVersion = match && match.length > 1 ? match[1].split(" ")[0].replace("_", ".") : ""


new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
})