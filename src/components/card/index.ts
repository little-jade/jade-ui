import Card from './Card.vue'
import type { App } from '@vue/runtime-core'

const JaCard = {
    ...Card, 
    install: function(app: App) {
        app.component("JaCard", Card)
    }
}

export { JaCard }
