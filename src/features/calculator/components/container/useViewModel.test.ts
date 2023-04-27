import { act, renderHook } from "@testing-library/react";
import { useViewModel } from "@/features/calculator/components/container/useViewModel";
import { CalculatorElement } from "@/features/calculator/types/CalculatorElement";

describe("useViewModel", () => {
  it("初期値は0になっていること", () => {
    const { result } = renderHook(() => useViewModel());
    expect(result.current.state.displayNumber).toBe("0");
  });

  describe("clickElement", () => {
    it('1を押した後にACをクリックしたら"0"になっていること', () => {
      const { result } = renderHook(() => useViewModel());
      const clickElement = (value: CalculatorElement) =>
        act(() => result.current.action.clickElement(value));

      clickElement("1");
      expect(result.current.state.displayNumber).toBe("1");
      clickElement("AC");
      expect(result.current.state.displayNumber).toBe("0");
    });

    it("1 + 2 = をすると 3 になること", () => {
      const { result } = renderHook(() => useViewModel());
      const clickElement = (value: CalculatorElement) =>
        act(() => result.current.action.clickElement(value));

      clickElement("1");
      clickElement("+");
      clickElement("2");
      clickElement("=");

      expect(result.current.state.displayNumber).toBe("3");
    });

    it("4 - 2 = をすると 2 になること", () => {
      const { result } = renderHook(() => useViewModel());
      const clickElement = (value: CalculatorElement) =>
        act(() => result.current.action.clickElement(value));

      clickElement("4");
      clickElement("-");
      clickElement("2");
      clickElement("=");

      expect(result.current.state.displayNumber).toBe("2");
    });

    it("3 × 5 = をすると 15 になること", () => {
      const { result } = renderHook(() => useViewModel());
      const clickElement = (value: CalculatorElement) =>
        act(() => result.current.action.clickElement(value));

      clickElement("3");
      clickElement("*");
      clickElement("5");
      clickElement("=");

      expect(result.current.state.displayNumber).toBe("15");
    });

    it("8 ÷ 4 = をすると 2 になること", () => {
      const { result } = renderHook(() => useViewModel());
      const clickElement = (value: CalculatorElement) =>
        act(() => result.current.action.clickElement(value));

      clickElement("8");
      clickElement("/");
      clickElement("4");
      clickElement("=");

      expect(result.current.state.displayNumber).toBe("2");
    });

    it("7 % 3 = をすると 1 になること", () => {
      const { result } = renderHook(() => useViewModel());
      const clickElement = (value: CalculatorElement) =>
        act(() => result.current.action.clickElement(value));

      clickElement("7");
      clickElement("%");
      clickElement("3");
      clickElement("=");

      expect(result.current.state.displayNumber).toBe("1");
    });

    it("小数点を含む計算もできること", () => {
      const { result } = renderHook(() => useViewModel());
      const clickElement = (value: CalculatorElement) =>
        act(() => result.current.action.clickElement(value));

      clickElement("1");
      clickElement(".");
      clickElement("2");
      clickElement("-");
      clickElement("0");
      clickElement(".");
      clickElement("5");
      clickElement("=");

      expect(result.current.state.displayNumber).toBe("0.7");
    });

    it("plus minusを押すと正負が反転し、その後正しく計算できること", () => {
      const { result } = renderHook(() => useViewModel());
      const clickElement = (value: CalculatorElement) =>
        act(() => result.current.action.clickElement(value));

      clickElement("2");
      clickElement("±");
      expect(result.current.state.displayNumber).toBe("-2");

      clickElement("±");
      expect(result.current.state.displayNumber).toBe("2");

      clickElement("±");
      expect(result.current.state.displayNumber).toBe("-2");

      clickElement("/");
      clickElement("2");
      clickElement("=");

      expect(result.current.state.displayNumber).toBe("-1");
    });
  });
});
