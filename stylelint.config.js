const __PROD__ = process.env.NODE_ENV === "production";

module.exports = {
  extends: [
    "stylelint-config-xo",
    "stylelint-config-css-modules",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "selector-class-pattern": null,
    "color-function-notation": "legacy",
    "prettier/prettier": __PROD__ ? true : null,
  },
};
