import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  scrollBehavior: (from, to, saved) => saved || { x: 0, y: 0 },
  routes: [
    {
      path: "/",
      component: () => import("@/pages/Home")
    },
    {
      path: "/tvos",
      component: () => import("@/pages/tvOS")
    }
  ]
});