const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname + "/dist"),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }, {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'football',
            template: './src/index.ejs'
        }),
        new ExtractTextPlugin('styles.css')
    ],
    devServer: {
        port: 1000,
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            models: path.resolve(__dirname, 'src/models/'),
            data: path.resolve(__dirname, 'src/data/')
        }
    }
};

