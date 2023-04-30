import { Meta, StoryObj } from "@storybook/react";

import { DisplayTime } from "@/features/pomodoro/components/presentational/elements/DisplayTime";

export default {
  title: "features/pomodoro/presentational/elements/DisplayTime",
  component: DisplayTime,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof DisplayTime>;

type Story = StoryObj<typeof DisplayTime>;

export const Primary: Story = {
  args: {
    time: "12:00",
  },
};
