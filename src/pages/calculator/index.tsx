import { NextPage } from "next";
import { CalculatorContainer } from "@/features/calculator/components/container/CaluculatorContainer";
import { DefaultLayout } from "@/layout/default";

const Calculator: NextPage = () => (
  <DefaultLayout className="bg-black flex items-center justify-center">
    <CalculatorContainer />
  </DefaultLayout>
);

export default Calculator;
