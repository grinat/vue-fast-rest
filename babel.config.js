// see https://babeljs.io/docs/en/babel-preset-env
module.exports = {
  presets: [
    ["@vue/app",
      {
        useBuiltIns: false
      }
    ],
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ],
  plugins: []
}
