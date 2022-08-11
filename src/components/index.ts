import type { App, Component } from "vue";

import Card from "@/components/card/Card.vue";
import Button from "@/components/button/Button.vue";
import Space from "@/components/space/Space.vue";
import Icon from "@/components/icon/Icon.vue";

export const JaCard = withInstall(Card, "JaCard");
export const JaButton = withInstall(Button, "JaButton");
export const JaIcon = withInstall(Icon, "JaIcon");
export const JaSpace = withInstall(Space, "JaSpace");

function withInstall(component: Component, name: string) {
  return {
    ...component,
    install: function (app: App) {
      app.component(name, component);
    },
  };
}
