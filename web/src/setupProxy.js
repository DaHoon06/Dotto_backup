const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.dotto.site/api',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  )
}
