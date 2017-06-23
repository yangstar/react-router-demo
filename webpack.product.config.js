var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    // devtool: "source-map",
    //webpack-dev-server配置
    // devServer: {
    //     contentBase: './dist',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
    //     historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    //     inline: true,//设置为true，当源文件改变时会自动刷新页面
    //     port: 2001,//设置默认监听端口，如果省略，默认为"8080"
    //     publicPath: '/'
    // },
    entry: {
        bundle: ['./src/app' ],
        vendors: ['react', 'redux', 'react-dom', 'react-router']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash:8].js',
        chunkFilename: "[id].chunk.[chunkhash:8].js",
        publicPath: ''
    },
   
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
        ]
        
    },

    plugins: [
        new HtmlWebpackPlugin({
			template: __dirname + '/index.html',
            filename: __dirname + '/dist/index.html', // 生成的html存放路径，相对于 path
		}),
        
    ]
    
}

module.exports = config;    