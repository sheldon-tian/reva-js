import resolve from '@rollup/plugin-node-resolve';
import ts from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';


export default {
	input: 'src/index.ts',
	output: {
		file: 'lib/bundle.js',
		format: 'es',
        sourcemap: true,
	},
    plugins: [
        json(),
        resolve(),
        ts({
            tsconfig: 'tsconfig.json',
        })
    ]
};