import { App, Plugin } from 'vue'
//@ts-ignore
import Button from './src/index.vue'

export const ButtonPlugin: Plugin = {
 install(app: App) {
    console.log(import.meta.env.MODE)
    app.component('DButton', Button)
 }
}
export { Button }