import { Meta, StoryObj } from "@storybook/react";

import { PrimaryButton } from "@/features/pomodoro/components/presentational/buttons/PrimaryButton";

export default {
  title: "features/pomodoro/presentational/buttons/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof PrimaryButton>;

type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {
  args: {
    className: "bg-orange-500",
    label: "集中スタート",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    className: "bg-gray-500",
    label: "リセット",
    disabled: true,
  },
};
