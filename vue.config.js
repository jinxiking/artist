const path = require('path')

const resolve = dir => {
  return path.join(__dirname, './', dir)
}

module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@assets/style/reset.scss";`
            },
        }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json', '.scss'],
            alias: {
                '@api': resolve('src/axios'),
                '@assets': resolve('src/assets'),
                '@components': resolve('src/components'),
                
            }
        }
    },
}
