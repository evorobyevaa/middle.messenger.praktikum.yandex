const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: "development",
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/bundle.[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', 'json'],
    alias: {
      components: path.resolve(__dirname, "./src/components/"),
      controllers: path.resolve(__dirname, "./src/controllers/"),
      core: path.resolve(__dirname, "./src/core"),
      helpers: path.resolve(__dirname, "./src/helpers"),
      pages: path.resolve(__dirname, "./src/pages"),
      hocs: path.resolve(__dirname, "./src/hocs"),
      api: path.resolve(__dirname, "./src/api"),
      handlebars: "handlebars/dist/handlebars",
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: 'ts-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ]
}


