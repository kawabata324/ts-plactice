import { FC } from "react";

type Props = {
  num: number;
};

export const DisplayNumber: FC<Props> = ({ num }) => (
  <h1 className="text-6xl text-white">{num.toLocaleString()}</h1>
);
