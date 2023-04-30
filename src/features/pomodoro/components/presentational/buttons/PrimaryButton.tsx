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
        `px-12 py-4 flex justify-center items-center text-white rounded-md shadow-2xl ${className}`
      )}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};
