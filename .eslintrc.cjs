module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    'plugin:react-hooks/recommended',
    "plugin:jsx-a11y/recommended",
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    "eslint-config-prettier",
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js'],
  "settings": {
    "react": {
      "version": "detect"
    },
    // "import/resolver": {
    //   "node": {
    //     "paths": ["src"],
    //     "extensions": [".js", ".jsx", ".ts", ""]
    //   },
    // }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', "prettier"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_"
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    'prettier/prettier': 'error',
  },
}
