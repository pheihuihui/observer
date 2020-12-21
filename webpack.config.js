const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const generateHtmlPlugin = (title) => {
    return new HtmlWebpackPlugin({
        title: title,
        filename: `${title.toLowerCase()}.html`,
    });
}

module.exports = {
    entry: {
        bundle: './src/index.ts'
    },
    devtool: 'inline-source-map',
    mode: 'development',
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'bundle',
        publicPath: './'
    },
    plugins: [generateHtmlPlugin('index')]
};