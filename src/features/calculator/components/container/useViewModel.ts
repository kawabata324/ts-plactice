import { ViewModelFunc } from "@/types/viewModelFunc";
import { CalculatorElement } from "@/features/calculator/types/CalculatorElement";
import { useState } from "react";
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
import { evaluate } from "mathjs";

type State = {
  displayResult: string;
};

type Action = {
  clickElement: (element: CalculatorElement) => void;
};

const LIMIT_MAX_LENGTH = 10;
export const useViewModel: ViewModelFunc<State, Action> = () => {
  const [formula, setFormula] = useState("");
  const [displayResult, setDisplayResult] = useState("0");
  const getPrevElement = () => formula.slice(-1);

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
    setDisplayResult("0");
  };

  const calculate = () => {
    try {
      const newDisplayNumber = evaluate(formula);
      setDisplayResult(String(newDisplayNumber));
    } catch (e) {
      return e;
    }
  };

  const addNaturalNumber = (element: CalculatorElement) => {
    if (displayResult.toLocaleString().length >= LIMIT_MAX_LENGTH) return;
    if (isNumber(getPrevElement()) || getPrevElement() === DECIMAL_POINT) {
      setDisplayResult(String(displayResult) + element);
      setFormula((prev) => prev + element);
    } else {
      setDisplayResult(element);
      setFormula((prev) => prev + element);
    }
  };

  const setFourArithmeticOperation = (element: CalculatorElement) => {
    if (!isNumber(getPrevElement())) return;

    setFormula((prev) => prev + element);
  };

  const execPlusMinus = () => {
    if (isNegativeNumber(Number(displayResult))) {
      const newDisplayNumber = Math.abs(Number(displayResult));
      setDisplayResult(String(newDisplayNumber));
      setFormula((prev) => prev.replace(`${String(displayResult)}`, `${newDisplayNumber}`));
    } else {
      const newDisplayNumber = Number(displayResult) * -1;
      setDisplayResult(String(newDisplayNumber));
      setFormula((prev) => prev.replace(`${String(displayResult)}`, `${newDisplayNumber}`));
    }
  };

  const execDecimalPoint = () => {
    if (!isNumber(getPrevElement())) return;
    setDisplayResult(String(displayResult) + DECIMAL_POINT);
    setFormula((prev) => prev + DECIMAL_POINT);
  };

  return {
    state: {
      displayResult,
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
