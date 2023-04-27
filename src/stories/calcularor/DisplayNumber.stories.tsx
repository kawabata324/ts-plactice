import { Meta, StoryObj } from "@storybook/react";

import { DisplayNumber } from "@/features/calculator/presentational/DisplayNumber";

export default {
  title: "features/calculator/presentational/DisplayNumber",
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
