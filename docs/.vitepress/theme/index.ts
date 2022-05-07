import Theme from "vitepress/dist/client/theme-default";
import microApp from "@micro-zoe/micro-app";
import { Button } from "../../../packages/Button";
import { MicroApp } from "../../../view/micro-app";

import './style.less'

microApp.start();

export default {
  ...Theme,
  enhanceApp(context) {
    const { app,router } = context;
    console.log(router.route)
    app.component("m-button", Button);
    app.component("micro-app-test", MicroApp);
  },
};
