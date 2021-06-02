import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
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
          component: () => import("./components/portal/Homepage"),
          meta: {
            guest: true
          }
        },
        {
          path: "/users",
          name: "users",
          component: () => import("./components/portal/Users"),
          meta: {
            requiresAuth: true,
            is_user : true
          }
        },
        {
          path: "/news",
          name: "news",
          component: () => import("./components/portal/News")
        },
        {
          path: "/news/path",
          name: "news_detail",
          component: () => import("./components/portal/NewsDetail")
        },
        {
          path: "/products",
          name: "products",
          component: () => import("./components/portal/ProductList")
        },
        {
          path: "/product/:id",
          name: "product_detail",
          component: () => import("./components/portal/ProductDetail")
        }
      ]
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("./components/admin/AdminLayout"),
      meta: {
        requiresAuth: true,
      },
      children : [
        {
          path: "/admin",
          name: "adminpage",
          component: () => import("./components/admin/AdminProductList"),
          meta: {
            requiresAuth: true,
          }
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
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (Vue.$cookies.get("au_rf_ntx") == null) {
      next({
        name: 'homepage',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let is_staff = localStorage.getItem('is_staff')
      if(to.matched.some(record => record.meta.is_admin)) {
        if(is_staff === 'true'){
          next()
        }
        else{
          next({ name: 'homepage'})
        }
      }else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router;
