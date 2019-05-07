'use strict';
module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'build.js'
    },
    watch: false,
    //devtool: "source-map"
    //devtool: "eval"
    devtool: "cheap-inline-module-source-map"
};