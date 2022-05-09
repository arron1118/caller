const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
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
