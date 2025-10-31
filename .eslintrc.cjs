module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: "detect" },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "prettier", // 若你用 Prettier，避免規則衝突
  ],
  plugins: ["react", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+ 不需在檔案引入 React
  },
};
