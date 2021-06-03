const confusingBrowserGlobals = require("confusing-browser-globals");

const __PROD__ = process.env.NODE_ENV === "production";

const config = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    "xo",
    require.resolve("xo/config/plugins"),
    "xo-react",
    "plugin:prettier/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", "coverage", "src/**/lib/*.js", "/*.js"],
  rules: {
    "no-shadow": "error",
    "no-console": "error",
    "no-implicit-coercion": ["error", { allow: ["!!"] }],
    "no-restricted-globals": ["error", ...confusingBrowserGlobals],
    "unicorn/no-array-for-each": "off",
    "unicorn/prevent-abbreviations": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "node/file-extension-in-import": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["xo-typescript", "prettier"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/no-implicit-any-catch": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
    },
  },
};

if (!__PROD__) {
  config.extends = [
    ...config.extends,
    "silent",
    "silent/import",
    "silent/prettier",
    "silent/unicorn",
    "silent/react",
  ];
  config.overrides[0].extends = [
    ...config.overrides[0].extends,
    "silent/@typescript-eslint",
  ];
}

module.exports = config;
