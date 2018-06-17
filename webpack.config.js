const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');

module.exports = env => {
    let devtool = 'eval-source-map';
    const plugins = [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(env.NODE_ENV)
            }
        }),
        new CopyWebpackPlugin([
            { from: 'src/index.html', to: 'index.html' }
        ])
    ];

    if (env.NODE_ENV === 'prod') {
        devtool = false;
        plugins.push(new UglifyJsPlugin({
            exclude: /node_modules/
        }));
    }

    return {
        devtool,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "bundle.js"
        },
        module: {
            loaders: [{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }]
        },
        plugins
    }
};