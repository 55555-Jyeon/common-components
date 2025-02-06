import React from "react";
import { type Meta, type StoryFn } from "@storybook/react";
import Header from "../header/index";

const meta: Meta = {
    title: "Components/Header",
    component: Header,
};
export default meta;

const Template: StoryFn = (args: any) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    // 기본값 설정 (필요한 경우)
};
