import { Meta, StoryObj } from "@storybook/react";

import { Calculator } from "@/features/calculator/components/presentational/Calculator";

export default {
  title: "features/calculator/presentational/Calculator",
  component: Calculator,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof Calculator>;

type Story = StoryObj<typeof Calculator>;

export const Primary: Story = {
  args: {
    displayNum: 1200,
  },
};
