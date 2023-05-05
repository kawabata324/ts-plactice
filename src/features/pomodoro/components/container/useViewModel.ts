import { ViewModelFunc } from "@/types/viewModelFunc";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CustomToast } from "@/features/pomodoro/components/presentational/CustomToast";
import { useAudio } from "@/features/pomodoro/components/container/hooks/useAudio";

type State = {
  time: string;
  progressPercent: number;
  timerId: NodeJS.Timeout | null;
};

type Action = {
  clickStart: () => void;
  clickStop: () => void;
  clickReset: () => void;
};

const POMODORO = 25 * 60;
export const useViewModel: ViewModelFunc<State, Action> = () => {
  // TODO: カスタマイズできるようにする
  // local storageを使って保存した設定を持ってくる
  const {
    action: { audioPlay, audioStop },
  } = useAudio("/sounds/iphone.mp3");
  const [duration, setDuration] = useState(POMODORO);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const time = `${Math.floor(duration / 60)}:${("0" + (duration % 60)).slice(-2)}`;
  const progressPercent = 100 - (duration / POMODORO) * 100;

  const clickStart = () => {
    const timerId = setInterval(() => {
      setDuration((prev) => prev - 1);
    }, 1000);

    setTimerId(timerId);
  };

  const clickStop = () => {
    stopTimer();
  };

  const clickReset = () => {
    restTimer();
  };

  const stopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  const restTimer = () => {
    stopTimer();
    setDuration(POMODORO);
  };

  useEffect(() => {
    if (duration === 0) {
      finishPomodoro();
    }

    () => {
      audioStop();
    };
  }, [duration]);

  const finishPomodoro = async () => {
    restTimer();
    await audioPlay();

    toast.custom((t) =>
      CustomToast(t, (t) => {
        audioStop();
        toast.dismiss(t.id);
      })
    );
  };

  return {
    state: {
      time,
      progressPercent,
      timerId,
    },
    action: {
      clickStart,
      clickStop,
      clickReset,
    },
  };
};
