import { FC } from "react";
import { Calculator } from "@/features/calculator/components/presentational/Calculator";
import { useViewModel } from "@/features/calculator/components/container/useViewModel";

export const CalculatorContainer: FC = () => {
  const {
    state: { displayNumber },
    action: { clickElement },
  } = useViewModel();
  return <Calculator displayNum={displayNumber} onClick={clickElement} />;
};
