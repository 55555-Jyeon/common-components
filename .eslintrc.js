module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ["*.ts", "*.tsx"],
            parserOptions: {
                sourceType: "script",
            },
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".scss"],
        project: "./tsconfig.json",
    },
    plugins: ["react"],
    rules: {
        "react/react-in-jsx-scope": "off", // React 17 이상에서는 필요 없음
        "prettier/prettier": ["error", { endOfLine: "auto" }], // Prettier와 줄바꿈 충돌 방지
        "@typescript-eslint/consistent-type-definitions": "off",
    },
    settings: {
        react: {
            version: "detect", // React 버전을 자동으로 감지
        },
    },
};
