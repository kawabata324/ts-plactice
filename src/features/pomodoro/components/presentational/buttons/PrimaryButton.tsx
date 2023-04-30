import { FC } from "react";

type Props = {
  onClick: () => void;
  label: string;
};

export const PrimaryButton: FC<Props> = ({ onClick, label }) => {
  return (
    <button
      className="px-12 py-4 flex justify-center items-center bg-white rounded-md shadow-2xl"
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};
