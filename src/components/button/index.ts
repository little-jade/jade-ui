import Button from "./Button.vue";
import type { App } from "vue";

const JaButton = {
  ...Button,
  install: function (app: App) {
    app.component("JaButton", Button);
  },
};

export { JaButton };
