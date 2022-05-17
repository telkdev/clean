/* eslint-disable no-unused-vars */
import type { RouteRecordRaw } from "vue-router";

// ?Move out of this file

enum AppLayouts {
  Default = "DefaultLayout",
  Admin = "AdminLayout",
  UserProfile = "UserProfileLayout",
}

const routes: Array<RouteRecordRaw> = [
  {
    component: () => import("@/views/HomePage.vue"),
    name: "home",
    path: "/",
    meta: {
      layout: AppLayouts.Default,
      requiresAuth: false,
    },
  },
  {
    component: () => import("@/views/PricingPage.vue"),
    name: "pricing",
    path: "/pricing",
    meta: {
      layout: AppLayouts.Default,
      requiresAuth: false,
    },
  },
  {
    component: () => import("@/views/PrivacyPolicyPage.vue"),
    name: "privacy-policy",
    path: "/privacy-policy",
    meta: {
      layout: AppLayouts.Default,
      requiresAuth: false,
    },
  },
  {
    component: () => import("@/views/TermsConditionsPage.vue"),
    name: "terms-conditions",
    path: "/terms-conditions",
    meta: {
      layout: AppLayouts.Default,
      requiresAuth: false,
    },
  },
  {
    component: () => import("@/views/CookiePolicyPage.vue"),
    name: "cookie-policy",
    path: "/cookie-policy",
    meta: {
      layout: AppLayouts.Default,
      requiresAuth: false,
    },
  },
  {
    component: () => import("@/views/FrequentlyAskedQuestionsPage.vue"),
    name: "faq",
    path: "/faq",
    meta: {
      layout: AppLayouts.Default,
      requiresAuth: false,
    },
  },
  {
    path: "/profile",
    component: () => import("@/views/user/UserProfile.vue"),
    meta: {
      layout: AppLayouts.UserProfile,
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        name: "overview",
        component: () => import("@/components/user/UserOverview.vue"),
      },
      {
        path: "financial-information",
        name: "financial-information",
        component: () => import("@/components/user/UserFinancialInformation.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("@/components/user/UserSettings.vue"),
      },
    ],
  },
  // Just for test purposes;
  {
    component: () => import("@/views/_Sandbox.vue"),
    name: "sandbox",
    path: "/sandbox",
    meta: {
      layout: AppLayouts.Default,
      requiresAuth: false,
    },
  },
  {
    component: () => import("@/views/NotFoundPage.vue"),
    name: "not-found",
    path: "/:pathMatch(.*)*",
    meta: {
      layout: AppLayouts.Default,
      requiresAuth: false,
    },
  },
];

export default routes;
