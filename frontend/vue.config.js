module.exports = {
    devServer: {
        overlay: false,
proxy: {
    '/api': {
        target: 'http://localhost:9002/api',
            changeOrigin: true,
            pathRewrite: {
            '^/api': ''
            }
        }
    }
},
outputDir: '../backend/docs',
}