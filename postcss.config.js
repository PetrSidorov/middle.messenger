module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({ stage: 1 }),
    // require('postcss-nested'),
    require('postcss-simple-vars'),
    // require('postcss-font-magician'),
    // require('postcss-modules'),
    require('cssnano'),
    //   require('autoprefixer'),

  ],
};
