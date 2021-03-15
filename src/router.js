import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/Layout"),
      children : [
        {
          path: "/",
          alias : "/home",
          name: "homepage",
          component: () => import("./components/Homepage")
        },
        {
          path: "/news",
          name: "news",
          component: () => import("./components/News")
        },
        {
          path: "/add",
          name: "add",
          component: () => import("./components/AddTutorial")
        }
      ]
    }
  ]
});