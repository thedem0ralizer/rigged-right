module.exports = {
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Rigged Right, LLC'
        return args
      })
    }
  }