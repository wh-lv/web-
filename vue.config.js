const path = require('path')
const port = 7070
const title = 'VUE最佳实践'

// 处理 post 参数
const bodyParser = require('body-parser')

module.exports = {
  publicPath: '/best-practice',
  devServer: {
    port,
    // 配置 mock 接口
    before: app => { // app 是 express 的实例
      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({
        extended: true
      }))
      app.post('/dev-api/user/login', (req, res) => {
        const { username } = req.body
        if (username === 'admin' || username === 'jerry') {
          res.json({
            code: 1,
            data: username
          })
        } else {
          res.json({
            code: 10204,
            message: '用户名或密码错误'
          })
        }
      })
      app.get('/dev-api/user/info', (req, res) => {
        const auth = req.headers['authorization']
        const roles = auth.split(' ')[1] === 'admin' ? ['admin'] : ['editor']
        res.json({
          code: 1,
          data: roles
        })
      })
    }
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
