const path = require('path')
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: './',  
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack: {
    resolve: {
      fallback: {
        path: false,
        fs: false,
        os: false,
        timers: require.resolve("timers-browserify")
      },
      alias: {
      '@': path.resolve(__dirname, 'src/renderer'),
      __dirname: path.resolve(__dirname, '.')
      }
    },
    optimization:{
      // minimize:false
    }
  },
  chainWebpack:config=>{
    config.plugin('html').tap(args => {
      args[0].minify = false; // 完全禁用HTML压缩
      return args;
    });
  },
  pluginOptions:{
    electronBuilder:{
      externals: ['serialport', '@serialport/*'],
      customFileProtocol: './', // 设置自定义文件协议，以解决 Electron 中加载本地文件不显示的问题。
      // preload: 'src/preload.js',
      // mainProcessFile: 'src/background.js',
      chainWebpackMainProcess: config=>{
        config.output.filename('background.js')
        // config.externals({
        //   '@electron/remote':'commonjs @electron/remote'
        // })
      },
      nodeIntegration: true,   // 仅开发阶段可加
      contextIsolation: false, // 同上
      enableRemoteModule: true
    }
  }
})
