import { FC } from "react";
import { CircleProgress } from "@/features/pomodoro/components/presentational/progresses/CircleProgress";
import { DisplayTime } from "@/features/pomodoro/components/presentational/elements/DisplayTime";
import { PrimaryButton } from "@/features/pomodoro/components/presentational/buttons/PrimaryButton";

type Props = {
  progressPercentage: number;
  time: string;
  buttonHandlers: {
    onClickReset: () => void;
    onClickStart?: () => void;
    onClickStop?: () => void;
  };
};

export const Pomodoro: FC<Props> = ({ progressPercentage, time, buttonHandlers }) => {
  const isResetDisabled = time === "00:00";
  return (
    <div className="flex flex-col items-center gap-8 p-10">
      <CircleProgress value={progressPercentage}>
        <DisplayTime time={time} />
      </CircleProgress>
      <div className="flex justify-between items-cente gap-4">
        {buttonHandlers.onClickStart && (
          <PrimaryButton
            onClick={buttonHandlers.onClickStart}
            label="集中する"
            disabled={false}
            className={"bg-orange-500"}
          />
        )}

        {buttonHandlers.onClickStop && (
          <PrimaryButton
            onClick={buttonHandlers.onClickStop}
            label="一時停止する"
            disabled={false}
            className={"bg-orange-500"}
          />
        )}
        <PrimaryButton
          onClick={buttonHandlers.onClickReset}
          label="リセット"
          disabled={isResetDisabled}
          className={"bg-gray-500"}
        />
      </div>
    </div>
  );
};
