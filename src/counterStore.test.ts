import { act, renderHook } from "@testing-library/react";
import { useCounterStore } from "./counterStore";

describe("useCounterStore", () => {
  it("counter's initial value is 0", () => {
    const { result } = renderHook(() => useCounterStore());
    expect(result.current.counter).toEqual(0);
  });

  it("every time increment is called, counter increases by one", () => {
    const { result } = renderHook(() => useCounterStore());
    expect(result.current.counter).toEqual(0);

    act(() => result.current.increment());
    expect(result.current.counter).toEqual(1);
    act(() => result.current.decrease());
    expect(result.current.counter).toEqual(0);
  });
});
