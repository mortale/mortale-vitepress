
// 开发环境地址
const config: Record<string, string> = {
    react17: 'http://localhost:4005'
  }
  
  // 线上环境地址
  const getConfig = () => {
    if (import.meta.env.MODE === 'production') {
      // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
      Object.keys(config).forEach((key) => {
        config[key] = window.location.origin
      })
    }
    return config
  }
  
    // 在部署后，nextjs11和nuxtjs2依然和开发环境保持一致，绑定5006和6006端口，这里单独处理
  
  // if (true) {
  //   Object.keys(config).forEach((key) => {
  //     config[key] = `http://127.0.0.1:8080`
  //   })
  
  //   const { protocol, hostname } = location
  //   config.nextjs11 = `${protocol}//${hostname}:5006`
  //   config.nuxtjs2 = `${protocol}//${hostname}:6006`
  
  export default getConfig
  