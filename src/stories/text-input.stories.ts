import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from "@/components/text-input";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "TextInput",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: "Your name",
    type: "text",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Your name",
    type: "text",
  },
};

export const Focused: Story = {
  args: {
    placeholder: "Your name",
    type: "text",
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector("input");

    if (input) {
      input.focus();
    }
  },
};

export const WithError: Story = {
  args: {
    error: true,
    placeholder: "Your name",
    type: "text",
  },
};

export const Successful: Story = {
  args: {
    success: true,
    placeholder: "Your name",
    type: "text",
  },
};

export const WithIcon: Story = {
  args: {
    type: "email",
    placeholder: "Your email",
    withIcon: true,
  },
};
