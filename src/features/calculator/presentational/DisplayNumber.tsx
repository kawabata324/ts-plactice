import { FC } from "react";

type Props = {
  num: number;
};

export const DisplayNumber: FC<Props> = ({ num }) => {
  const displayNum = num.toLocaleString();
  const isFontSizeLarge = displayNum.length >= 9;
  return (
    <h1 className={`${isFontSizeLarge ? "text-4xl" : "text-5xl"} text-white`}>{displayNum}</h1>
  );
};
