import type { Meta, StoryObj } from "@storybook/react";

import { BaseInput } from "@/components/base-input";

const meta: Meta<typeof BaseInput> = {
  component: BaseInput,
  title: "BaseInput",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {
  args: {
    placeholder: "Your name",
  },
};

export const Disable: Story = {
  args: {
    disabled: true,
    placeholder: "Your name",
  },
};
