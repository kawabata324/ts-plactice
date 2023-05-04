import { FC } from "react";
import { Pomodoro } from "@/features/pomodoro/components/presentational/Pomodoro";

export const PomodoroContainer: FC = () => {
  return (
    <Pomodoro
      time="12:00"
      progressPercentage={50}
      buttonHandlers={{
        onClickReset: () => {},
        onClickStart: () => {},
      }}
    />
  );
};
