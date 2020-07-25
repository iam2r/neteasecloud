module.exports = {
  publicPath: "",
  devServer: {
    inline: true,
    hot: true,
    host: "0.0.0.0",
    useLocalIp: true,
    open: true,
    historyApiFallback: true,
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
                @import "~@/styles/_var.scss";
                @import "~@/assets/_spritesmith/netease.scss";
                @import "~@/styles/_mixins.scss";
                `,
      },
    },
  },
  transpileDependencies: [/swiper/, /dom7/, /strip-ansi/], //IE11兼容，正则匹配强制走babel转换

  chainWebpack: (config) => {
    config
      .plugin("sprites")
      .use(require("webpack-spritesmith"), [require("./sprites.config")]);
    config.plugin("eruds").use(require("eruda-webpack-plugin"), [
      {
        entry: /app\.js$/,
      },
    ]);
  },
};
