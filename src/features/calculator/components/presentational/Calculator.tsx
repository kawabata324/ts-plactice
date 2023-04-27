import { FC } from "react";
import { DisplayNumber } from "@/features/calculator/components/presentational/elements/DisplayNumber";
import { PrimaryButton } from "@/features/calculator/components/presentational/buttons/PrimaryButton";
import {
  IconDivide,
  IconEqual,
  IconMinus,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconNumber6,
  IconNumber7,
  IconNumber8,
  IconNumber9,
  IconPercentage,
  IconPlus,
  IconPlusMinus,
  IconX,
} from "@tabler/icons-react";
import { ZeroButton } from "@/features/calculator/components/presentational/buttons/ZeroButton";
import { DecimalPoint } from "@/features/calculator/components/presentational/elements/DecimalPoint";
import { ACText } from "@/features/calculator/components/presentational/elements/ACText";
import {
  AC,
  DECIMAL_POINT,
  DIVIDE,
  EIGHT,
  EQUAL,
  FIVE,
  FOUR,
  MINUS,
  MULTIPLY,
  NINE,
  ONE,
  PERCENT,
  PLUS,
  PLUS_MINUS,
  SEVEN,
  SIX,
  THREE,
  TWO,
} from "@/features/calculator/constants/calculatorElements";
import { CalculatorElement } from "@/features/calculator/types/CalculatorElement";

type Props = {
  displayNum: number;
  onClick: (element: CalculatorElement) => void;
};
export const Calculator: FC<Props> = ({ displayNum, onClick }) => {
  return (
    <div className="bg-black w-full h-full max-w-sm">
      <div className="flex flex-col gap-6 pt-12 px-1 pb-5">
        <div className="flex items-center justify-end">
          <DisplayNumber num={displayNum} />
        </div>
        <div className="grid grid-cols-4 gap-2 justify-items-center">
          {/* 1行目 AC ± % / */}
          <PrimaryButton onClick={onClick} bgColor="bg-gray-300" element={AC}>
            <ACText />
          </PrimaryButton>
          <PrimaryButton onClick={onClick} bgColor="bg-gray-300" element={PLUS_MINUS}>
            <IconPlusMinus color="black" />
          </PrimaryButton>
          <PrimaryButton onClick={onClick} bgColor="bg-gray-300" element={PERCENT}>
            <IconPercentage color="black" />
          </PrimaryButton>
          <PrimaryButton onClick={onClick} bgColor="bg-orange-500" element={DIVIDE}>
            <IconDivide color="white" />
          </PrimaryButton>
          {/* 2行目 7 8 9 x */}
          <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={SEVEN}>
            <IconNumber7 color="white" />
          </PrimaryButton>
          <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={EIGHT}>
            <IconNumber8 color="white" />
          </PrimaryButton>
          <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={NINE}>
            <IconNumber9 color="white" />
          </PrimaryButton>
          <PrimaryButton onClick={onClick} bgColor="bg-orange-500" element={MULTIPLY}>
            <IconX color="white" />
          </PrimaryButton>
          {/* 3行目 4 5 6 - */}
          <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={FOUR}>
            <IconNumber4 color="white" />
          </PrimaryButton>
          <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={FIVE}>
            <IconNumber5 color="white" />
          </PrimaryButton>
          <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={SIX}>
            <IconNumber6 color="white" />
          </PrimaryButton>
          <PrimaryButton onClick={onClick} bgColor="bg-orange-500" element={MINUS}>
            <IconMinus color="white" />
          </PrimaryButton>
          {/* 4行目 1 2 3 + */}
          <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={ONE}>
            <IconNumber1 color="white" />
          </PrimaryButton>
          <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={TWO}>
            <IconNumber2 color="white" />
          </PrimaryButton>
          <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={THREE}>
            <IconNumber3 color="white" />
          </PrimaryButton>
          <PrimaryButton onClick={onClick} bgColor="bg-orange-500" element={PLUS}>
            <IconPlus color="white" />
          </PrimaryButton>
          {/* 5行目 0 . = */}
          <div className="col-span-2 w-11/12">
            <ZeroButton onClickZero={onClick} />
          </div>
          <div className="col-span-1">
            <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={DECIMAL_POINT}>
              <DecimalPoint />
            </PrimaryButton>
          </div>
          <div className="col-span-1">
            <PrimaryButton onClick={onClick} bgColor="bg-orange-500" element={EQUAL}>
              <IconEqual color="white" />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
