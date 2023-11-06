import React from "react";
import Button from "../components/Button";

export default {
    title: "components/Button",
    component: Button,
    argTypes: { handleClick : { action: "handleClick "}}
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
    title: "Hello",
    backgroundColor: "red",
    borderRadius: 12,
    size: "lg"
};
