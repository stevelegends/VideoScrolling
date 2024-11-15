module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^(.*)styles$',
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^components/(.*)$',
    '^(.*)./molecules(.*)$',
    '^hooks/(.*)$',
    '^./use(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
