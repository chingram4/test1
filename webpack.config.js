const path = require('path')

module.exports = {
    
    mode:"development",
    entry: path.resolve(__dirname, `src`, `app`),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
        static: path.resolve(__dirname, "./src"),
        historyApiFallback: true
    },

    module: {
        rules: [
            { 
                test: /\.js$|jsx/,
                loader: 'babel-loader',
                exclude: /node_modules/ 
        }
        ]
    }
}