import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./index";
import styles from "./style.module.scss";
import "./button.style.scss";

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        designType: {
            control: "select",
            options:
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                styles ? Object.keys(styles) : [],
        },
    },
};

export default meta;

// Button의 type
type Story = StoryObj<typeof Button>;

// 👇 The args you need here will depend on your components
export const Default: Story = {
    args: {
        label: "default button",
        designType: "solidBlue",
        sizes: { width: "120px", height: "40px" },
        spacing: { padding: "10px", margin: "5px" },
        disabled: false,
        onClick: action("clicked"),
    },
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        label: "disabled button",
        disabled: true,
    },
};

export const SolidBlue: Story = {
    args: {
        ...Default.args,
        label: "solid blue button",
        designType: "solidBlue",
    },
};

export const SolidBlack: Story = {
    args: {
        ...Default.args,
        label: "solid black button",
        designType: "solidBlack",
    },
};

export const OutlineBlue: Story = {
    args: {
        ...Default.args,
        label: "outline blue button",
        designType: "outlineBlue",
    },
};

export const OutlineBlack: Story = {
    args: {
        ...Default.args,
        label: "outline black button",
        designType: "outlineBlack",
    },
};

export const LightSolidBlue: Story = {
    args: {
        ...Default.args,
        label: "ghost blue button",
        designType: "lightSolidBlue",
    },
};
