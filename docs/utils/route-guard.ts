// target:模拟出route的路由守卫 对vitepress下的简易路由进行监控
function data() {
  return {
    cacheLocation: location,
  };
}

export default {
  data,
};
