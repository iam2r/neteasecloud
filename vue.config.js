module.exports = {
    publicPath: '',
    devServer: {
        inline: true,
        hot: true, 
        open: true,
        host: '0.0.0.0',
        useLocalIp: true,
        historyApiFallback: true,
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                @import "~@/styles/_var.scss";
                @import "~@/styles/_mixins.scss";
                `
            }
        }
    },
    transpileDependencies: [/swiper/, /dom7/, /strip-ansi/], //IE11兼容，正则匹配强制走babel转换
}