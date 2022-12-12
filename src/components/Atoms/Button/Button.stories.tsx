import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import ThemeProviderWrapper from "../../../utils/ThemeProviderWrapper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProviderWrapper>
    <Button {...args} />
  </ThemeProviderWrapper>
);

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  label: "Adicionar ao carrinho",
  onClick: () => {
    console.log("clicked");
  },
};
