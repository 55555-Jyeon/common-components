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
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".scss"],
    },
    plugins: ["react"],
    rules: {
        "react/react-in-jsx-scope": "off", // React 17 이상에서는 필요 없음
        "prettier/prettier": ["error", { endOfLine: "auto" }], // Prettier와 줄바꿈 충돌 방지
    },
    settings: {
        react: {
            version: "detect", // React 버전을 자동으로 감지
        },
    },
};
