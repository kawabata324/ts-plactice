import { FC } from "react";
import { PrimaryButton } from "@/features/calculator/presentational/buttons/PrimaryButton";
import { IconNumber0 } from "@tabler/icons-react";

type Props = {
  onClickZero: (element: string) => void;
};
export const ZeroButton: FC<Props> = ({ onClickZero }) => {
  return (
    <PrimaryButton
      element="0"
      bgColor="bg-gray-700"
      className={`rounded-3xl w-full justify-start pl-5`}
      onClick={onClickZero}
    >
      <IconNumber0 color="white" />
    </PrimaryButton>
  );
};
