const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const uglify = require('rollup-plugin-uglify').uglify

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/vue-fast-rest.js',
    format: 'umd',
    name: 'VueFastRest',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    uglify()
  ]
}
