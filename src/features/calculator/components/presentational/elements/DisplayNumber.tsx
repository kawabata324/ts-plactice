import { FC } from "react";

type Props = {
  num: number;
};

export const DisplayNumber: FC<Props> = ({ num }) => {
  const displayText = num.toLocaleString();
  const isFontSizeLarge = displayText.length >= 9;
  return (
    <h1 className={`${isFontSizeLarge ? "text-5xl" : "text-6xl"} text-white`}>{displayText}</h1>
  );
};
