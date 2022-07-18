import type { App } from '@vue/runtime-core'
import { JaCard } from '@/components/card'
import { JaButton } from '@/components/button'

const components = [
    JaCard,
    JaButton
]

export {
    JaCard,
    JaButton
}
export default {
    install: function(app: App) {
        components.forEach(comp => app.use(comp))
    }
}
