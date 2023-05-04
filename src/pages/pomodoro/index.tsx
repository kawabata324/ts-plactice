import { NextPage } from "next";
import { PomodoroContainer } from "@/features/pomodoro/components/container/PomodoroContainer";
import { DefaultLayout } from "@/layout/default";

const Pomodoro: NextPage = () => {
  return (
    <DefaultLayout className="bg-black flex items-center justify-center">
      <PomodoroContainer />
    </DefaultLayout>
  );
};

export default Pomodoro;
