const config = {
    entry: ['./src/main.js'],
    output: {
      path: __dirname + '/dist',
      filename: 'ik-constraints.bundle.js'
    },
    module: {
      rules: [
        {
          loader:'babel-loader',
          test: /\.js$/,
          exclude:  /node_modules/,
          query: {
             presets: ['es2015'] 
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js'],
	  alias: {
		jquery: "jquery/src/jquery",
		pixi: "pixi.js/dist/pixi"
      }
    },
    devServer:{
      port: 8080,
      contentBase: __dirname + '/dist',
      inline: true
    }
}
module.exports = config;