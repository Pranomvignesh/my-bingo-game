module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/':{
        target: 'http://localhost:4000',
        changeOrigin: true
      }
    }
  }
}
