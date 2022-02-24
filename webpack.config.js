const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
    output: {
        chunkFilename: 'js/[name].js?id=[chunkhash]',
    },
    module: {
        rules: [
            {
                test: /\.mjs$/i,
                resolve: { byDependency: { esm: { fullySpecified: false } } }
            }
        ]
    }
};
