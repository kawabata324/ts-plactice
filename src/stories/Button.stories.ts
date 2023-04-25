import type { Meta, StoryObj } from "@storybook/react";

import { Hello } from "@/features/components/Hello";

const meta: Meta<typeof Hello> = {
  title: "features/components/Hello",
  component: Hello,
};

export default meta;
type Story = StoryObj<typeof Hello>;

export const Default: Story = {
  args: {},
};
