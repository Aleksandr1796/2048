module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public',
        port: 3000
    },
    module: {
        rules: [
            {
                loader: 'babel-loader', test: /\.js/
            }
        ]
    }
};