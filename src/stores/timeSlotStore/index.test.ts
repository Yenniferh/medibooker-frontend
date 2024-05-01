import { renderHook } from "@testing-library/react";
import { useTimeSlotStore, updateSelectedDate, updateSelectedTimeSlotId } from "./index";

describe("useTimeSlotStore", () => {
  it("should have empty initial values", () => {
    const { result } = renderHook(() => useTimeSlotStore());
    expect(result.current.date).toEqual("");
    expect(result.current.timeSlotId).toEqual("");
  });

  it("should update the selected date", () => {
    const date = "2021-10-10";
    renderHook(() => updateSelectedDate(date));

    const { result } = renderHook(() => useTimeSlotStore());
    expect(result.current.date).toEqual(date);
  });

  it("should update the selected time slot id", () => {
    const timeSlotId = "123";
    renderHook(() => updateSelectedTimeSlotId(timeSlotId));

    const { result } = renderHook(() => useTimeSlotStore());
    expect(result.current.timeSlotId).toEqual(timeSlotId);
  });
});
