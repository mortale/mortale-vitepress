import Theme from "vitepress/dist/client/theme-default";
import microApp from "@micro-zoe/micro-app";
import { MicroApp } from "../../../view/micro-app";

import './style.less'

microApp.start({
   /**
   * 自定义fetch
   * @param url 静态资源地址
   * @param options fetch请求配置项
   * @returns Promise<string>
   */
    fetch(url: string, options: any, appName: string|null) {
  
      // if (url === 'http://localhost:3001/error.js') {
      //   return Promise.resolve('')
      // }
  
        let config:RequestInit | null = {}
      //  if(/.js$/.test(url)){
      //   config= {
      //     headers: {
      //       "Content-Type":'application/x-javascript',
      //     },
      //   }
      //  }else if(/.css$/.test(url)) {
      //   config= {
      //     headers: {
      //       "Content-Type":'text/css'
      //     }
      //   }
      //  }

      return fetch(url, Object.assign(options, config)).then((res) => {
        if(/.js$/.test(url)){
        res.headers['Content-Type'] = 'application/x-javascript'
         }else if(/.css$/.test(url)) {
          res.headers['Content-Type'] = 'text/css'
         }
        return res.text()
      })
    }
});

export default {
  ...Theme,
  enhanceApp(context) {
    const { app,router } = context;
    console.log(router.route)
    app.component("micro-app-test", MicroApp);
  },
};
