import type { StorybookConfig } from "@storybook/react-webpack5";
import type { Configuration as WebpackConfig } from "webpack";
import path from "path";

const config: StorybookConfig = {
    stories: ["../**/*.stories.tsx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-actions",
        "@storybook/addon-controls",
        "@storybook/addon-knobs",
        "@chromatic-com/storybook",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: true,
    },
    webpackFinal: async (config) => {
        if (!config.module || !config.module.rules) {
            return config;
        }

        // SCSS 규칙 찾기 및 제거
        const scssRule = config.module.rules.find(
            (rule) =>
                rule &&
                typeof rule !== "string" &&
                rule.test &&
                rule.test.toString().includes("scss")
        );

        config.module.rules = config.module.rules.filter(
            (rule) => rule !== scssRule
        );

        // TypeScript/JavaScript 규칙
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve("babel-loader"),
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }],
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            ],
        });

        // SCSS 모듈 규칙
        config.module.rules.push({
            test: /\.module\.scss$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        esModule: false, // <== 여기 추가 (CommonJS 방식)
                        importLoaders: 1,
                        modules: {
                            auto: true,
                            localIdentName: "[name]__[local]--[hash:base64:5]",
                        },
                    },
                },
                "sass-loader",
            ],
        });

        // 글로벌 SCSS 규칙
        config.module.rules.push({
            test: /\.scss$/,
            exclude: /\.module\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
        });

        // resolve 설정
        const webpackConfig = config as WebpackConfig;
        if (!webpackConfig.resolve) {
            webpackConfig.resolve = {};
        }

        webpackConfig.resolve.alias = {
            ...webpackConfig.resolve.alias,
            "@": path.resolve(__dirname, "../src"),
        };

        // 확장자 설정
        webpackConfig.resolve.extensions = [
            ...(webpackConfig.resolve.extensions || []),
            ".ts",
            ".tsx",
            ".js",
            ".jsx",
            ".scss",
        ];

        return webpackConfig;
    },
};

export default config;
