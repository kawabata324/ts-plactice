import { NextPage } from "next";
import { PomodoroContainer } from "@/features/pomodoro/components/container/PomodoroContainer";
import { DefaultLayout } from "@/layout/default";
import { Toaster } from "react-hot-toast";

const Pomodoro: NextPage = () => {
  return (
    <DefaultLayout className="bg-black flex items-center justify-center">
      <PomodoroContainer />
      <Toaster />
    </DefaultLayout>
  );
};

export default Pomodoro;
