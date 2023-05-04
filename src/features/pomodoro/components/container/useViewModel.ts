import { ViewModelFunc } from "@/types/viewModelFunc";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CustomToast } from "@/features/pomodoro/components/presentational/CustomToast";

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
  const [duration, setDuration] = useState(POMODORO);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [messageSoundUrl, setMessageSoundUrl] = useState<string>("/sounds/iphone.mp3");

  const time = `${Math.floor(duration / 60)}:${("0" + (duration % 60)).slice(-2)}`;
  const progressPercent = 100 - (duration / POMODORO) * 100;
  const messageAudio = typeof window !== "undefined" && new Audio(messageSoundUrl);

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

    () => {
      stopAudio(messageAudio);
    };
  }, [duration]);

  const finishPomodoro = async () => {
    stopTimer();
    await startAudio(messageAudio);
    setDuration(POMODORO);

    toast.custom((t) =>
      CustomToast(t, (t) => {
        stopAudio(messageAudio);
        toast.dismiss(t.id);
      })
    );
  };

  const stopAudio = (audio: false | HTMLAudioElement) => {
    if (audio instanceof HTMLAudioElement) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const startAudio = async (audio: false | HTMLAudioElement) => {
    if (audio instanceof HTMLAudioElement) {
      await audio.play();
    }
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
