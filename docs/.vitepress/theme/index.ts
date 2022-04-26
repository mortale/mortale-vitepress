import Theme from "vitepress/dist/client/theme-default";
import { Button } from "../../../packages/Button";
import { MicroApp } from "../../../view/micro-app";

import microApp from "@micro-zoe/micro-app";
microApp.start();

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component("m-button", Button);
    app.component("micro-app-test", MicroApp);
  },
};
