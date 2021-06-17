module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/env",
        {
          targets: {
            chrome: "58"
            // ie: "11",
          },
          useBuiltIns: "usage",
          corejs: { version: 3.6, proposals: true },
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread",
    ],
  };
};

//If we want to use react
//   "@babel/preset-react",
//   ["@babel/preset-typescript", { "allExtensions": true, "isTSX": true }],
