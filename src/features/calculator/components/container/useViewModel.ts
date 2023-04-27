import { ViewModelFunc } from "@/types/viewModelFunc";
import { CalculatorElement } from "@/features/calculator/types/CalculatorElement";
import { useCallback, useState } from "react";
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
  ZERO,
} from "@/features/calculator/constants/calculatorElements";

type State = {
  displayNumber: string;
};

type Action = {
  clickElement: (element: CalculatorElement) => void;
};

const LIMIT_MAX_LENGTH = 10;
export const useViewModel: ViewModelFunc<State, Action> = () => {
  const [formula, setFormula] = useState("");
  const [displayNumber, setDisplayNumber] = useState("0");
  const getPrevElement = useCallback(() => formula.slice(-1), [formula]);

  const clickElement = (element: CalculatorElement) => {
    switch (element) {
      case PLUS:
      case MINUS:
      case MULTIPLY:
      case DIVIDE:
      case PERCENT:
        setFourArithmeticOperation(element);
        break;
      case ZERO:
      case ONE:
      case TWO:
      case THREE:
      case FOUR:
      case FIVE:
      case SIX:
      case SEVEN:
      case EIGHT:
      case NINE:
        addNaturalNumber(element);
        break;
      case AC:
        reset();
        break;
      case EQUAL:
        calculate();
        break;
      case PLUS_MINUS:
        execPlusMinus();
        break;
      case DECIMAL_POINT:
        execDecimalPoint();
        break;
      default:
        throw new Error("Unexpected element");
    }
  };

  const reset = () => {
    setFormula("");
    setDisplayNumber("0");
  };

  const calculate = () => {
    try {
      const newDisplayNumber = eval(formula);
      setDisplayNumber(newDisplayNumber);
    } catch (e) {
      return;
    }
  };

  const addNaturalNumber = (element: CalculatorElement) => {
    if (displayNumber.toLocaleString().length >= LIMIT_MAX_LENGTH) return;
    if (isNumber(getPrevElement()) || getPrevElement() === DECIMAL_POINT) {
      setDisplayNumber(String(displayNumber) + element);
      setFormula((prev) => prev + element);
    } else {
      setDisplayNumber(element);
      setFormula((prev) => prev + element);
    }
  };

  const setFourArithmeticOperation = (element: CalculatorElement) => {
    if (!isNumber(getPrevElement())) return;

    setFormula((prev) => prev + element);
  };

  const execPlusMinus = () => {
    if (isNegativeNumber(Number(displayNumber))) {
      const newDisplayNumber = Math.abs(Number(displayNumber));
      setDisplayNumber(String(newDisplayNumber));
      setFormula((prev) => prev.replace(`${String(displayNumber)}`, `${newDisplayNumber}`));
    } else {
      const newDisplayNumber = Number(displayNumber) * -1;
      setDisplayNumber(String(newDisplayNumber));
      setFormula((prev) => prev.replace(`${String(displayNumber)}`, `${newDisplayNumber}`));
    }
  };

  const execDecimalPoint = () => {
    if (!isNumber(getPrevElement())) return;
    setDisplayNumber(String(displayNumber) + DECIMAL_POINT);
    setFormula((prev) => prev + DECIMAL_POINT);
  };

  return {
    state: {
      displayNumber,
    },
    action: {
      clickElement,
    },
  };
};

const isNumber = (char: string): boolean => {
  const numbers = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE];
  return numbers.includes(char);
};

const isNegativeNumber = (number: number): boolean => {
  return number < 0;
};
