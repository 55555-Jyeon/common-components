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
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".scss", ".css"], // SCSS 및 CSS 확장자 추가
        project: "./tsconfig.json",
    },
    plugins: ["react", "import"],
    rules: {
        "react/react-in-jsx-scope": "off", // React 17 이상에서는 필요 없음
        "prettier/prettier": ["error", { endOfLine: "auto" }], // Prettier와 줄바꿈 충돌 방지
        "@typescript-eslint/consistent-type-definitions": "off",
        "import/extensions": [
            // 확장자 처리
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
        "import/no-unresolved": "error", // 파일이 제대로 해석되지 않으면 오류 발생
    },
    settings: {
        react: {
            version: "detect", // React 버전을 자동으로 감지
        },
    },
};
