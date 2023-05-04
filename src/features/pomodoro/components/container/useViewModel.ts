import { ViewModelFunc } from "@/types/viewModelFunc";
import { useEffect, useState } from "react";

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

const POMODORO = 3;
export const useViewModel: ViewModelFunc<State, Action> = () => {
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
    stopTimer();
    setDuration(POMODORO);
  };

  const stopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  useEffect(() => {
    if (duration === 0) {
      finishPomodoro();
    }
  }, [duration]);

  useEffect(() => {
    (async () => {
      const result = await Notification.requestPermission();

      console.log(result);
    })();
  }, []);

  const finishPomodoro = () => {
    stopTimer();
    // const img = "/to-do-notifications/img/icon-128.png";
    const text = "通知テスト";
    const notification = new Notification("To do list", { body: text });

    // TODO: 通知
    console.log("finish pomodoro");
    setDuration(POMODORO);
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
