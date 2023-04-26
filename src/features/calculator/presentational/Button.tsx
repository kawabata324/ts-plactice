import { FC } from "react";

type Props = {
  label: string;
  onClick: () => void;
  bgColor?: "bg-orange-500";
};

export const Button: FC<Props> = ({ label, onClick, bgColor = "" }) => {
  return (
    <button className={`${bgColor} rounded-half w-12 h-12 flex justify-center items-center`} onClick={() => onClick()}>
      {label}
    </button>
  );
};
