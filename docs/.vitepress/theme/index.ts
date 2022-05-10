import Theme from "vitepress/dist/client/theme-default";
import microApp from "@micro-zoe/micro-app";
import { MicroApp } from "../../../view/micro-app";

import './style.less'

microApp.start();

export default {
  ...Theme,
  enhanceApp(context) {
    const { app,router } = context;
    console.log(router.route)
    app.component("micro-app-test", MicroApp);
  },
};
