import { ViewModelFunc } from "@/types/viewModelFunc";

type State = {};

type Action = {
  audioPlay: () => void;
  audioStop: () => void;
};
export const useAudio: ViewModelFunc<State, Action> = (url: string) => {
  const audio = typeof window !== "undefined" && new Audio(url);

  const audioPlay = async () => {
    if (audio instanceof HTMLAudioElement) {
      await audio.play();
    }
  };

  const audioStop = () => {
    if (audio instanceof HTMLAudioElement) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return {
    state: {},
    action: {
      audioPlay,
      audioStop,
    },
  };
};
