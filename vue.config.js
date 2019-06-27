const path = require('path')

module.exports = {
  pluginOptions: {
    'resolve-alias': {
      alias: {
        src: path.resolve(__dirname, './src'),
        common: path.resolve(__dirname, './src/common'),
        components: path.resolve(__dirname, './src/components')
      }
    }
  }
}
