import { FC } from "react";
import { Calculator } from "@/features/calculator/components/presentational/Calculator";
import { useViewModel } from "@/features/calculator/components/container/useViewModel";

export const CalculatorContainer: FC = () => {
  const {
    state: { displayResult },
    action: { clickElement },
  } = useViewModel();
  return <Calculator displayNum={Number(displayResult)} onClick={clickElement} />;
};
