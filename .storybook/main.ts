import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-essentials"],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config) => {
        config.module = config.module || { rules: [] };
        config.module.rules = config.module.rules || [];

        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.scss$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: true,
                            localIdentName: "[name]__[local]--[hash:base64:5]",
                        },
                    },
                },
                "sass-loader",
            ],
        });

        config.resolve = config.resolve || {};
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            "@": path.resolve(__dirname, "../src"),
        };

        return config;
    },
};

export default config;
