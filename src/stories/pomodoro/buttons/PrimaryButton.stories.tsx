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
    label: "集中スタート",
  },
};
