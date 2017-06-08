var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './src');
var BUILD_PATH = path.resolve(__dirname, './build');
var MOCK_PATH = path.resolve(__dirname, './src/mock');

module.exports = {
    entry: APP_PATH + "/index.jsx",
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react']
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: MOCK_PATH            
        }])
    ]
}