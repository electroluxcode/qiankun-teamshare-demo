let proxy = require('http-proxy-middleware')

module.exports = function (app)  {
  app.use(
    // 代理 1
    proxy.createProxyMiddleware('/MyDemo', {             // 匹配到 '/api' 前缀的请求，就会触发该代理配置
      target: 'http://127.0.0.1:8088/',  // 请求转发地址
      changeOrigin: true,                             // 是否跨域
      /*
        changeOrigin 为 true 时，服务器收到的请求头中的host为：127.0.0.1:6000，也就是代理地址的 host
        changeOrigin 为 false 时，服务器收到的请求头中的host为：localhost:3000，也就是本地站点地址的 host
        changeOrigin 默认 false，但一般需要将 changeOrigin 值设为 true，根据自己需求调整
      */
      pathRewrite: {
        '^/MyDemo': ''                                   // 重写请求路径
      }
    }),
    // 代理 2，为什么 2 写前面，因为匹配规则，上面第一个已经是 /api 了，要不然会优先匹配到第一个代理上
    proxy.createProxyMiddleware('/2api', {
      target: 'http://127.0.0.1:6000/api',
      changeOrigin: true,
      pathRewrite: {
        '^/2api': ''
      }
    }),
    // 代理 3，这种写法是最规范的，前后都加 /
    proxy.createProxyMiddleware('/3api/', {
      target: 'http://127.0.0.1:6000/api/',
      changeOrigin: true,
      pathRewrite: {
        '^/3api/': ''
      }
    }),
    // 代理 4，这种代理标识尾部加 / ，代理地址尾部没有
    proxy.createProxyMiddleware('/4api/', {
      target: 'http://127.0.0.1:6000/api',
      changeOrigin: true,
      pathRewrite: {
        // '^/4api/': ''  // 这种替换成空，也没问题，但是不严谨
        '^/4api/': '/'    // 这样写更规范
      }
    })
    // ..... 多个代理
  )
}
