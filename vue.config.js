const port = 7070
const title = 'VUE最佳实践'

module.exports = {
  devServer: {
    port
  },
  configureWebpack: {
    name: title
  }
}
