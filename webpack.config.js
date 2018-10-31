const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {//配置第三方loader规则
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=1215540&name=[hash:8]-[name].[ext]'
                //limit给定的值是图片的大小。单位是byte。如果图片大于或等于给定的limit值，则不会转为base64格式的字符串。
            },
            {
                test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ]
}
