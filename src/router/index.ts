import * as vueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Main from "@/views/Main.vue";
import DataPoint from "@/views/DataPoint.vue";
import DataMain from "@/views/DataMain.vue";
import Members from "@/views/Members.vue";
import DataView from "@/views/DataView.vue";
import Directory from "@/views/Directory.vue";

import { useAuthStore } from "@/store/useAuthStore";
const routes: Array<vueRouter.RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
    meta: { isSecured: true },
  },
  {
    path: "/directory",
    name: "directory",
    component: Directory,
    meta: { isSecured: true },
  },
  {
    path: "/dataView",
    name: "dataView",
    component: DataView,
    meta: { isSecured: true },
  },
  {
    path: "/members",
    name: "members",
    component: Members,
    meta: { isSecured: true },
  },
  {
    path: "/dataMain",
    name: "dataMain",
    component: DataMain,
    meta: { isSecured: true },
  },
  {
    path: "/dataPoint",
    name: "dataPoint",
    component: DataPoint,
    meta: { isSecured: true },
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/login", // page not found
  },
];
const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Router guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.matched.some((record) => (record.meta.isSecured ? true : false))) {
    // secure route
    if (authStore.session.isLoggedIn) {
      next();
    } else {
      next("/login");
    }

    // console.log("Debug: " + to.name?.toString())
  } else {
    // unsecure route
    if (authStore.session.isLoggedIn) {
      router.push("/stock");
    } else {
      next();
    }
  }
});

export default router;
