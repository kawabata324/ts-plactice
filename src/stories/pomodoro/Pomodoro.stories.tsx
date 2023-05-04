import { Meta, StoryObj } from "@storybook/react";

import { Pomodoro } from "@/features/pomodoro/components/presentational/Pomodoro";

export default {
  title: "features/pomodoro/presentational/Pomodoro",
  component: Pomodoro,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof Pomodoro>;

type Story = StoryObj<typeof Pomodoro>;

export const Primary: Story = {
  args: {
    time: "12:00",
    progressPercentage: 50,
    buttonHandlers: {
      onClickReset: () => {},
      onClickStart: () => {},
    },
  },
};

export const StopButton: Story = {
  args: {
    time: "15:00",
    progressPercentage: 70,
    buttonHandlers: {
      onClickReset: () => {},
      onClickStop: () => {},
    },
  },
};
