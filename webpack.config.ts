import path from "path";
import type { Configuration } from "webpack";

const config: Configuration = {
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            additionalData: `
                @import "${path.resolve(__dirname, "src/common/styles/common.scss")}";
              `,
                        },
                    },
                ],
            },
        ],
    },
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};

export default config;
