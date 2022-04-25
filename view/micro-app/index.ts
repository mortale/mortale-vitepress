import { App, Plugin } from 'vue'
//@ts-ignore
import MicroApp from './src/index.vue'

export const ButtonPlugin: Plugin = {
 install(app: App) {
    app.component('MicroApp', MicroApp)
 }
}
export { MicroApp }