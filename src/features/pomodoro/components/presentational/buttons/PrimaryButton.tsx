import { FC } from "react";
import { overrideTailwindClasses } from "tailwind-override";

type Props = {
  onClick: () => void;
  label: string;
  disabled: boolean;
  className?: string;
};

export const PrimaryButton: FC<Props> = ({ onClick, label, disabled, className }) => {
  return (
    <button
      disabled={disabled}
      className={overrideTailwindClasses(
        `text-sm w-32 p-3 flex justify-center items-center text-white rounded-md shadow-2xl ${className}`
      )}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};
