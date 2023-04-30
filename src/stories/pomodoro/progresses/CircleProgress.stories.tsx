import { Meta, StoryObj } from "@storybook/react";

import { CircleProgress } from "@/features/pomodoro/components/presentational/progresses/CircleProgress";
import { DisplayTime } from "@/features/pomodoro/components/presentational/elements/DisplayTime";

export default {
  title: "features/pomodoro/presentational/progresses/CircleProgress",
  component: CircleProgress,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof CircleProgress>;

type Story = StoryObj<typeof CircleProgress>;

export const Primary: Story = {
  args: {
    value: 0,
    children: <DisplayTime time="25:00" />,
  },
};

export const Half: Story = {
  args: {
    value: 50,
    children: <DisplayTime time="12:30" />,
  },
};

export const Full: Story = {
  args: {
    value: 100,
    children: <DisplayTime time="00:00" />,
  },
};
