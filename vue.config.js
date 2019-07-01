const path = require('path')

module.exports = {
  pluginOptions: {
    'resolve-alias': {
      alias: {
        src: path.resolve(__dirname, './src'),
        common: path.resolve(__dirname, './src/common'),
        components: path.resolve(__dirname, './src/components'),
        // styles: path.resolve(__dirname, 'src/styles'),
      }
    },
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/main.scss")],
    }
  }
}
