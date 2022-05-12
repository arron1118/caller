const path = require('path');
const mix = require("laravel-mix");

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
    output: {
        chunkFilename: `js/[name].js?id=[contenthash]`,
        clean: true,
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
