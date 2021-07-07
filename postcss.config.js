const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
// const postcssNested = require('postcss-nested');
// const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
    autoprefixer(),
  ],
};
