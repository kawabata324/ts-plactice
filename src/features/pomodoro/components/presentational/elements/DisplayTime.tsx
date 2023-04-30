import { FC } from "react";

type Props = {
  time: string;
};

export const DisplayTime: FC<Props> = ({ time }) => {
  return <h1 className="text-9xl text-white font-mono font-bold">{time}</h1>;
};
