import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "@/components/Input/Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "number"],
    },
    clearable: {
      control: "boolean",
      description: "Показати кнопку очищення ❌",
    },
    placeholder: {
      control: "text",
      description: "Плейсхолдер у полі введення",
    },
  },
  args: {
    placeholder: "Enter something...",
    clearable: true,
    type: "text",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    clearable: true,
  },
};

export const Password2: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    clearable: false,
  },
};

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
    clearable: true,
  },
};

export const Text2: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
    clearable: false,
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter number",
    clearable: true,
  },
};

export const Number2: Story = {
  args: {
    type: "number",
    placeholder: "Enter number",
    clearable: false,
  },
};
