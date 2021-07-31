const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: 
    {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: { contentBase: path.join(__dirname, "src") },
    module: {
        rules: [
            { 
                test: /\.(ts|tsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    modules: true
                  }
                }
              ],
              include: /\.module\.css$/
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ],
              exclude: /\.module\.css$/
            },
            {
              test: /\.(ts|tsx)$/,
              enforce: 'pre',
              use: [
                {
                  options: {
                    eslintPath: require.resolve('eslint'),
          
                  },
                  loader: require.resolve('eslint-loader'),
                },
              ],
              exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};