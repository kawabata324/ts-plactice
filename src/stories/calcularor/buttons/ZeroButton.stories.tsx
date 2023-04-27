import { Meta, StoryObj } from "@storybook/react";

import { ZeroButton } from "@/features/calculator/components/presentational/buttons/ZeroButton";

export default {
  title: "features/calculator/presentational/buttons/ZeroButton",
  component: ZeroButton,
} satisfies Meta<typeof ZeroButton>;

type Story = StoryObj<typeof ZeroButton>;

export const Primary: Story = {
  args: {},
};
