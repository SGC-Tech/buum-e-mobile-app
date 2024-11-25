// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    "expo",
    "prettier",
    "plugin:@dword-design/import-alias/recommended",
  ],
  plugins: [
    "prettier",
    [
      "module-resolver",
      {
        alias: {
          "#": ".",
        },
      },
    ],
  ],
  rules: {
    "prettier/prettier": "error",
    rules: {
      "@dword-design/import-alias/prefer-alias": [
        "error",
        {
          alias: {
            "#": "./src",
            "#components": "./src/components",
          },
        },
      ],
    },
  },
};
