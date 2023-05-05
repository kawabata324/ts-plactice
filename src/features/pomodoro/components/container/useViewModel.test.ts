import { useViewModel } from "@/features/pomodoro/components/container/useViewModel";
import { act, renderHook } from "@testing-library/react";

describe("useViewModel", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("timeの初期値は25:00になっていること", () => {
    const { result } = renderHook(() => useViewModel());
    expect(result.current.state.time).toBe("25:00");
  });

  it("progressPercentの初期値は0になっていること", () => {
    const { result } = renderHook(() => useViewModel());
    expect(result.current.state.progressPercent).toBe(0);
  });

  describe("clickStart", () => {
    it("clickStartをクリックしたらtimeが減っていくこと", () => {
      const { result } = renderHook(() => useViewModel());
      act(() => result.current.action.clickStart());

      act(() => jest.advanceTimersByTime(1000));
      expect(result.current.state.time).toBe("24:59");

      act(() => jest.advanceTimersByTime(1000));
      expect(result.current.state.time).toBe("24:58");
    });
  });

  describe("clickStop", () => {
    it("clickStopをクリックしたらtimeが止まること", () => {
      const { result } = renderHook(() => useViewModel());
      act(() => result.current.action.clickStart());
      act(() => jest.advanceTimersByTime(1000));
      expect(result.current.state.time).toBe("24:59");

      act(() => result.current.action.clickStop());
      expect(result.current.state.time).toBe("24:59");
      act(() => jest.advanceTimersByTime(1000));
      expect(result.current.state.time).toBe("24:59");
      expect(result.current.state.timerId).toBe(null);
    });
  });

  describe("clickReset", () => {
    it("clickResetをクリックしたらtimeがリセットされること", () => {
      const { result } = renderHook(() => useViewModel());
      act(() => result.current.action.clickStart());
      act(() => jest.advanceTimersByTime(1000));
      expect(result.current.state.time).toBe("24:59");

      act(() => result.current.action.clickReset());
      expect(result.current.state.time).toBe("25:00");
      expect(result.current.state.timerId).toBe(null);
    });
  });

  describe("durationが1の場合", () => {
    it("25分00秒経つと、時間がリセットされること", () => {
      const { result } = renderHook(() => useViewModel());
      act(() => result.current.action.clickStart());
      act(() => jest.advanceTimersByTime(1499000));
      expect(result.current.state.time).toBe("0:01");
      act(() => jest.advanceTimersByTime(1000));
      expect(result.current.state.time).toBe("25:00");
    });
  });
});
