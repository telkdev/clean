import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

import { popupVariantsEnum } from "@/enums/popupEnum";

import { useUserStore } from "@/store/useUserStore";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth) {
    const { isAuthenticated } = useUserStore();

    if (!isAuthenticated) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      const query = {
        redirect: to.fullPath,
        popupName: popupVariantsEnum.Login,
      };

      return {
        path: "/",
        // save the location we were at to come back later
        query,
      };
    }
  }
});

export default router;
