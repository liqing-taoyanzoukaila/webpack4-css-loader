const path = require("path");
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: "./js/main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(gif|png|jpg|woff|svg|ttf|eot)$/ ,
                use:[{
                    loader:'url-loader',
                    options: {
                        limit:500,
                        outputPath: 'images/',
                        name:'[name].[ext]'

                    }
                }]
            }
        ]
    },
    devtool: 'inline-source-map',
    mode: 'development',
    plugins: [
        new miniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};
