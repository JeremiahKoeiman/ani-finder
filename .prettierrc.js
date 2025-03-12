module.exports = {
  trailingComma: 'none',
  printWidth: 140,
  htmlWhitespaceSensitivity: 'ignore',
  singleQuote: true,
  overrides: [
    {
      files: '*.html',
      options: {
        printWidth: 140
      }
    }
  ],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  arrowParens: 'avoid',
};
