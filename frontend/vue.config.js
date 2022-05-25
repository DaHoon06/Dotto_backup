import * as path from "path";

module.exports = {
    devServer: {
        overlay: false,
        contentBase: path.join(__dirname, ''),
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