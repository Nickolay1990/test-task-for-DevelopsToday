import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Toast } from "@/components/Toast/Toast";

const meta = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error"],
    },
    time: {
      control: "number",
      description: "Час через який закриється",
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToastSucces2sec: Story = {
  args: {
    type: "success",
    time: 2000,
  },
};

export const ToastSucces5sec: Story = {
  args: {
    type: "success",
    time: 5000,
  },
};

export const ToastError2sec: Story = {
  args: {
    type: "error",
    time: 2000,
  },
};
export const ToastError5sec: Story = {
  args: {
    type: "error",
    time: 5000,
  },
};
