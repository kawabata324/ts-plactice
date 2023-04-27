import { FC } from "react";
import { DisplayNumber } from "@/features/calculator/presentational/DisplayNumber";
import { PrimaryButton } from "@/features/calculator/presentational/buttons/PrimaryButton";
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
import { ZeroButton } from "@/features/calculator/presentational/buttons/ZeroButton";
import { DecimalPoint } from "@/features/calculator/presentational/elements/DecimalPoint";
import { ACText } from "@/features/calculator/presentational/elements/ACText";

type Props = {
  displayNum: number;
  onClick: (element: string) => void;
};
export const Calculator: FC<Props> = ({ displayNum, onClick }) => {
  return (
    <div className="bg-black flex flex-col gap-2 w-60 p-3 rounded-md">
      <div className="flex items-center justify-end">
        <DisplayNumber num={displayNum} />
      </div>
      {/* 1行目 AC ± % / */}
      <div className="flex items-center justify-end gap-2">
        <PrimaryButton onClick={onClick} bgColor="bg-gray-300" element={"AC"}>
          <ACText />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-gray-300" element={"±"}>
          <IconPlusMinus color="black" />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-gray-300" element={"%"}>
          <IconPercentage color="black" />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-orange-500" element={"/"}>
          <IconDivide color="white" />
        </PrimaryButton>
      </div>
      {/* 2行目 7 8 9 x */}
      <div className="flex items-center justify-end gap-2">
        <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={"7"}>
          <IconNumber7 color="white" />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={"8"}>
          <IconNumber8 color="white" />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={"9"}>
          <IconNumber9 color="white" />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-orange-500" element={"*"}>
          <IconX color="white" />
        </PrimaryButton>
      </div>
      {/* 3行目 4 5 6 - */}
      <div className="flex items-center justify-end gap-2">
        <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={"4"}>
          <IconNumber4 color="white" />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={"5"}>
          <IconNumber5 color="white" />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={"6"}>
          <IconNumber6 color="white" />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-orange-500" element={"-"}>
          <IconMinus color="white" />
        </PrimaryButton>
      </div>
      {/* 4行目 1 2 3 + */}
      <div className="flex items-center justify-end gap-2">
        <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={"1"}>
          <IconNumber1 color="white" />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={"2"}>
          <IconNumber2 color="white" />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={"3"}>
          <IconNumber3 color="white" />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-orange-500" element={"+"}>
          <IconPlus color="white" />
        </PrimaryButton>
      </div>
      {/* 5行目 0 . = */}
      <div className="flex items-center justify-end gap-2">
        <div className="grow">
          <ZeroButton onClickZero={onClick} />
        </div>
        <PrimaryButton onClick={onClick} bgColor="bg-gray-700" element={"."}>
          <DecimalPoint />
        </PrimaryButton>
        <PrimaryButton onClick={onClick} bgColor="bg-orange-500" element={"="}>
          <IconEqual color="white" />
        </PrimaryButton>
      </div>
    </div>
  );
};
