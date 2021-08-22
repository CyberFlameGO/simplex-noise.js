module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'mocha': true,
    'es2017': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Uint8Array': false,
    'define': false,
    'Float32Array': false
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
