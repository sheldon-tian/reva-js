import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: 'src/index.jsx',
    output: {
        file: 'public/bundle.js',
        format: 'iife'
    },
    plugins: [
        json(),
        resolve(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }),
        serve({
            contentBase: ["public"],
            port: 3000
        }),
        livereload({
            watch: 'public'
        })
    ]
};