module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:import/typescript",
        "plugin:storybook/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: ["react", "import"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
                scss: "always",
                css: "always",
            },
        ],
        "import/no-unresolved": "error",
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    ignorePatterns: ["*.scss", "*.css", ".eslintrc.js"],
};
