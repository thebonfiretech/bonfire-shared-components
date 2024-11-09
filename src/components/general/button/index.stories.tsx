import type { Meta, StoryObj } from "@storybook/react";

import { Button as ButtonComponent } from ".";
import { ButtonProps } from "./types";

const meta: Meta<ButtonProps> = {
  title: "General/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Button content" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    children: "Button",
  },
};
