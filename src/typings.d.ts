import "vue-router";

declare module "vue-router" {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    layout: string;
    requiresAuth: boolean;
  }
}
