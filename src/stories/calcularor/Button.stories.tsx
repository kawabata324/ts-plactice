import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/features/calculator/presentational/Button";

export default {
  title: "features/calculator/presentational/Button",
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "1",
    bgColor: "bg-orange-500",
  },
};
