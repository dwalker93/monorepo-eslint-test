module.exports = {
  ...require("@test/config/eslint-next"),
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [".eslintrc.js"],
};
