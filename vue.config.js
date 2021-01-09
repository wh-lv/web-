const path = require('path')
const port = 7070
const title = 'VUE最佳实践'

module.exports = {
  publicPath: '/best-practice',
  devServer: {
    port
  },
  configureWebpack: {
    name: title
  },
  chainWebpack (config) {
    config.module.rule('svg')
      .exclude.add(resolve('src/icons'))

    // 添加 svg-sprite-loader
    config.module.rule('icons')
      .test(/\.svg$/) // 设置 test
      .include.add(resolve('src/icons')) // 加入 include
      .end() // add 之后进入数组，使用 end 回退
      .use('svg-sprite-loader') // 添加 loader
      .loader('svg-sprite-loader') // 切换上下文到 loader
      .options({ symbolId: 'icon-[name]' }) // 指定选项
      .end()
  }
}

function resolve (dir) {
  return path.join(__dirname, dir)
}
