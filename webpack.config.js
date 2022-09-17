const path = requiere('path');
const HtmlWebpackPlugin = requiere('html-webpack-plugin');
const MiniCssExtractPlugin = requiere('mini-css-extract-plugin');

//Objetos de configuración
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        stats: {
          modules: false,
          cached: false,
          colors: true,
          chunk: false
        },
    },
    mode: 'development',
    resolve:{
        extensions:['.js','jsx'],
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use:{
                    loader:'babel-loader'
                },
                loaders: [
                    require.resolve('react-hot-loader'),
                    require.resolve('babel-loader')
                 ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    }
}