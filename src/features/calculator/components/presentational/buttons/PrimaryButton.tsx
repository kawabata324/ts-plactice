import { FC, PropsWithChildren } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import { CalculatorElement } from "@/features/calculator/types/CalculatorElement";

type BgColor = "bg-orange-500" | "bg-gray-300" | "bg-gray-700";

type Props = {
  onClick: (element: CalculatorElement) => void;
  bgColor: BgColor;
  element: CalculatorElement;
  className?: string;
};

export const PrimaryButton: FC<PropsWithChildren<Props>> = ({
  onClick,
  bgColor,
  element,
  children,
  className = "",
}) => {
  return (
    <button
      className={overrideTailwindClasses(
        `${bgColor} rounded-half w-20 h-20 flex justify-center items-center ${className}`
      )}
      onClick={() => onClick(element)}
    >
      {children}
    </button>
  );
};
