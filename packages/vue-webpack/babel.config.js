module.exports = {
  plugins: [
    '@vue/babel-plugin-jsx',
    ['@babel/plugin-transform-typescript', { isTSX: true }]
  ],
}