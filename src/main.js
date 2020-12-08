import eruda from "eruda"
eruda.init()

import Vue from "vue"
import App from "./App"
import router from "./plugins/router"
import Wow from "vue-wow"
import "animate.css"
import "./scss/animate-lite.scss"

Vue.use(Wow)

Vue.directive("scroll-show", {
  bind() {
    
  }
})

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
})