import Dialog from "./Dialog.vue";
import dialog from "./dialog";
import type { App } from "vue";

const JaDialog = {
  ...Dialog,
  ...dialog,
  install: function (app: App) {
    app.component("JaDialog", Dialog);
  },
};

export { JaDialog };
