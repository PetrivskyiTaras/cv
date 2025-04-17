module.exports = {
  plugins: {
    'postcss-custom-media-generator': {
      '--breakpoint-xs': '(width < 600px)',
      '--breakpoint-sm': '(600px <= width)',
      '--breakpoint-md': '(768px <= width)',
      '--breakpoint-lg': '(1200px <= width)',
      '--breakpoint-xl': '(1536px <= width)',
    },
    'postcss-preset-env': {
      stage: 2,
    },
  },
};
