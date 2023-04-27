import { FC } from "react";
import { PrimaryButton } from "@/features/calculator/components/presentational/buttons/PrimaryButton";
import { IconNumber0 } from "@tabler/icons-react";
import { ZERO } from "@/features/calculator/constants/calculatorElements";
import { CalculatorElement } from "@/features/calculator/types/CalculatorElement";

type Props = {
  onClickZero: (element: CalculatorElement) => void;
};
export const ZeroButton: FC<Props> = ({ onClickZero }) => {
  return (
    <PrimaryButton
      element={ZERO}
      bgColor="bg-gray-700"
      className={`rounded-3xl w-full justify-start pl-3`}
      onClick={onClickZero}
    >
      <IconNumber0 color="white" />
    </PrimaryButton>
  );
};
