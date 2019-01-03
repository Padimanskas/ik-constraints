module.exports = {
    entry: './src/main.ts',
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: './dist/[name].js'
    },
    module: {
        rules: [            {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }

        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    devServer: {
        port: 8080,
        inline: true,
        stats: 'minimal'
    }
};