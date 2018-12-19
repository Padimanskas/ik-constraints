module.exports = {
    entry: './src/main.ts',
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: './dist/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },



    devServer: {
        port: 8080,
        contentBase: __dirname + '/dist',
        inline: true
    }
};