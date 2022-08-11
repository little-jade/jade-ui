import type { App } from "vue";
import * as components from "@/components";
export * from "@/components";

export default {
  install: function (app: App) {
    Object.values(components).forEach((comp) => app.use(comp));
  },
};
