// Button.stories.tsx
import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Codepen from "./codepens";

export default {
  component: Codepen,
} as Meta;

export const Primary: Story = (args) => <Codepen {...args} />;
Primary.args = {
  label: "Button",
  primary: true,
};
