const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/client/src/index.js'),
    output: {
        path: path.join(__dirname, '/client/dist'),
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.html$/,
                use: [{
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
            template: path.resolve(__dirname, 'client/src/index.ejs')
        }),
        new ExtractTextPlugin('styles.css')
    ],
    devServer: {
        port: 1000,
        headers: {'Access-Control-Allow-Origin': '*'}
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'client/src/components/'),
            models: path.resolve(__dirname, 'client/src/models/'),
            data: path.resolve(__dirname, 'client/src/data/'),
            providers: path.resolve(__dirname, 'client/src/providers/'),
            constants: path.resolve(__dirname, 'client/src/constants/'),
            utils: path.resolve(__dirname, 'client/src/utils/'),
            containers: path.resolve(__dirname, 'client/src/containers/'),
            reducers: path.resolve(__dirname, 'client/src/reducers/'),
            actions: path.resolve(__dirname, 'client/src/actions/')
        }
    }
};

