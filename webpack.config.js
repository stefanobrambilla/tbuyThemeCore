const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
    module: {
        loaders: [
            { test: path.join(__dirname),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', "stage-0", "stage-1", "stage-2"],
                }
            }
        ],
            rules: [{
            test: require.resolve('jquery'),
            use: [
                {loader: 'expose-loader', options: 'jQuery'},
                { loader: 'expose-loader', options: '$'}
            ]
        },
            {
                test: require.resolve('popper.js'),
                use: [{loader: 'expose-loader',options: 'Popper'}]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },

    resolve: {
        modules: ['node_modules'],
            descriptionFiles: ['package.json'],
            mainFields: ['browser', 'main']
    },
    plugins: [
        new ExtractTextPlugin({ filename: './dist/css/app.css', disable: false, allChunks: true })
    ]

};


const core = Object.assign({}, config, {
    name: 'core',
    entry: ['./src/js/index.js', './src/scss/main.scss'],
    output: {
        path: __dirname,
        filename: './dist/js/core.js'
    },
});
const homepage = Object.assign({}, config,{
    name: 'homepage',
    entry: './src/js/modules/pages/homepage.js',
    output: {
        path: __dirname,
        filename: './dist/js/pages/homepage.js'
    },
});



module.exports = [core, homepage];

