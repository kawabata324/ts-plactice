import { Meta, StoryObj } from "@storybook/react";

import { DisplayNumber } from "@/features/calculator/components/presentational/elements/DisplayNumber";

export default {
  title: "features/calculator/presentational/elements/DisplayNumber",
  component: DisplayNumber,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof DisplayNumber>;

type Story = StoryObj<typeof DisplayNumber>;

export const Primary: Story = {
  args: {
    num: 1200,
  },
};

export const LargeNumber: Story = {
  args: {
    num: 123456789,
  },
};
