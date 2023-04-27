import { FC, PropsWithChildren } from "react";

type BgColor = "bg-orange-500" | "bg-gray-300" | "bg-gray-700";

type Props = {
  onClick: (element: string) => void;
  bgColor: BgColor;
  // TODO: UNION型に変更する
  element: string;
};

export const PrimaryButton: FC<PropsWithChildren<Props>> = ({
  onClick,
  bgColor,
  element,
  children,
}) => {
  return (
    <button
      className={`${bgColor} rounded-half w-12 h-12 flex justify-center items-center`}
      onClick={() => onClick(element)}
    >
      {children}
    </button>
  );
};
