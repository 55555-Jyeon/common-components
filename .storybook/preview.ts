import type { Preview } from "@storybook/react";
import "@/common/styles/common.scss"; // common styles

const preview: Preview = {
    parameters: {
        actions: { handles: ["onClick", "onChange"] },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
