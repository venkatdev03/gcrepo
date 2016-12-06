'use strict';

module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015','stage-0']
                }
            }
        ],
    },
    resolve: {
    root: __dirname,
    alias: {
      Main : 'app/components/Main.jsx',
      Nav : 'app/components/Nav.jsx'
    }
    },
    entry: './app/app.jsx',
    output: {
        path: `${__dirname}`,
        filename: './public/bundle.js'
    },
    exclude: /(node_modules | bower_components)/

};
