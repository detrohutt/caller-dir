import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: 'dist/cjs/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    },
    plugins: [builtins(), resolve({ preferBuiltins: false }), commonjs()]
  },
  {
    input: 'dist/esm/index.js',
    output: {
      file: 'dist/index.mjs',
      format: 'es'
    },
    plugins: [
      builtins(),
      resolve({ extensions: ['.mjs', '.js'], preferBuiltins: false }),
      commonjs()
    ]
  }
];
