import commonJS   from '@rollup/plugin-commonjs';
import resolve    from '@rollup/plugin-node-resolve';
import serve      from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';
import {terser}   from 'rollup-plugin-terser';

export default {
    input:   'src/index.ts',
    output:  {
        name:   'ByteshiftInjector',
        file:   'dist/index.js',
        format: 'umd',
        exports: 'named',
        sourcemap: true,
    },
    plugins: [
        typescript(),
        resolve({
        }),
        commonJS({
            include: 'node_modules/**',
        }),
        process.env.ROLLUP_WATCH && serve('dist'),
        !process.env.ROLLUP_WATCH && terser({
            output: {
                width: 120
            }
        })
    ],
};
