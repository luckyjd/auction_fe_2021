import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/portal/Layout"),
      children : [
        {
          path: "/",
          alias : "/home",
          name: "homepage",
          component: () => import("./components/portal/Homepage")
        },
        {
          path: "/news",
          name: "news",
          component: () => import("./components/portal/News")
        },
        {
          path: "/products",
          name: "products",
          component: () => import("./components/portal/ProductList")
        },
        {
          path: "/product/1",
          name: "product_detail",
          component: () => import("./components/portal/ProductDetail")
        }
      ]
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("./components/admin/AdminLayout"),
      children : [
        {
          path: "/admin",
          name: "adminpage",
          component: () => import("./components/admin/AdminProductList")
        },
        {
          path: "/admin/products",
          name: "adminProductList",
          component: () => import("./components/admin/AdminProductList")
        },
        {
          path: "/admin/products/create",
          name: "adminProductCreate",
          component: () => import("./components/admin/AdminProductCreate")
        },
        {
          path: "/admin/users",
          name: "adminUserList",
          component: () => import("./components/admin/AdminUserList")
        }
      ]
    }
  ]
});