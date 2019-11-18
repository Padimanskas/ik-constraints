const path = require('path');

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
        extensions: ['.ts', '.js'],
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@classes': path.resolve(__dirname, 'src/classes/'),
            '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
            '@particles': path.resolve(__dirname, 'src/particles/')
        }
    },

    devServer: {
        port: 8080,
        inline: true,
        stats: 'minimal'
    }
};