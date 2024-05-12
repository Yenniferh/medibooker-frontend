import { renderHook } from "@testing-library/react";
import { useSearchStore, updateQuery } from "./index";

describe("useSearchStore", () => {
  it("should have empty initial values", () => {
    const { result } = renderHook(() => useSearchStore());
    expect(result.current.query).toBeUndefined();
  });

  it("should update the selected date", () => {
    const query = "Dr. John Doe";
    renderHook(() => updateQuery(query));

    const { result } = renderHook(() => useSearchStore());
    expect(result.current.query).toEqual(query);
  });
});
