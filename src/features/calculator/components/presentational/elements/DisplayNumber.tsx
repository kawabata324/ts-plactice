import { FC } from "react";

type Props = {
  num: string;
};

export const DisplayNumber: FC<Props> = ({ num }) => {
  const displayNum = Number(num).toLocaleString();
  const isFontSizeLarge = displayNum.length >= 9;
  return (
    <h1 className={`${isFontSizeLarge ? "text-5xl" : "text-6xl"} text-white`}>{displayNum}</h1>
  );
};
