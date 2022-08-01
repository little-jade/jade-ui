import type { App, Component } from '@vue/runtime-core'

import Card from '@/components/card/Card.vue'
import Button from '@/components/button/Button.vue'
import Space from '@/components/space/Space.vue'

export const JaCard = withInstall(Card, "JaCard")
export const JaButton = withInstall(Button, "JaButton")
export const JaSpace = withInstall(Space, "JaSpace")

function withInstall(component: Component, name: string) {
    return {
        ...component,
        install: function(app: App) {
            app.component(name, component)
        }
    }
}
