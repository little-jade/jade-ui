import type { App } from '@vue/runtime-core'
import { JaCard } from '@/components/card'

const components = [
    JaCard
]

export {
    JaCard
}
export default {
    install: function(app: App) {
        components.forEach(comp => app.use(comp))
    }
}
