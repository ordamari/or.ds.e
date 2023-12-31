import Ts from 'rollup-plugin-typescript2';

export default {
  input: ['src/index.ts'],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [Ts()],
  external: ['react', 'react-dom', '@or.ds.e/foundation', '@or.ds.e/helpers'],
};
