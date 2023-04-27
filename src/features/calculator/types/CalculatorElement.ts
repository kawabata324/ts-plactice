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

export type AC = typeof AC;
export type PlusMinus = typeof PLUS_MINUS;
export type Percent = typeof PERCENT;
export type Divide = typeof DIVIDE;
export type Seven = typeof SEVEN;
export type Eight = typeof EIGHT;
export type Nine = typeof NINE;
export type Multiply = typeof MULTIPLY;
export type Four = typeof FOUR;
export type Five = typeof FIVE;
export type Six = typeof SIX;
export type Minus = typeof MINUS;
export type One = typeof ONE;
export type Two = typeof TWO;
export type Three = typeof THREE;
export type Plus = typeof PLUS;
export type Zero = typeof ZERO;
export type DecimalPoint = typeof DECIMAL_POINT;
export type Equal = typeof EQUAL;

export type CalculatorElement =
  | AC
  | PlusMinus
  | Percent
  | Divide
  | Seven
  | Eight
  | Nine
  | Multiply
  | Four
  | Five
  | Six
  | Minus
  | One
  | Two
  | Three
  | Plus
  | Zero
  | DecimalPoint
  | Equal;
