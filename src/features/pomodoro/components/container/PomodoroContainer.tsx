import { FC } from "react";
import { Pomodoro } from "@/features/pomodoro/components/presentational/Pomodoro";
import { useViewModel } from "@/features/pomodoro/components/container/useViewModel";

export const PomodoroContainer: FC = () => {
  const {
    state: { time, progressPercent, timerId },
    action: { clickReset, clickStart, clickStop },
  } = useViewModel();

  return (
    <Pomodoro
      time={time}
      progressPercentage={progressPercent}
      buttonHandlers={{
        onClickReset: clickReset,
        onClickStart: clickStart,
        onClickStop: clickStop,
      }}
      isTimerStart={timerId !== null}
    />
  );
};
