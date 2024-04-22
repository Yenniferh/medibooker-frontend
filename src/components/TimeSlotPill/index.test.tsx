import { render, screen } from "@testing-library/react";
import TimeSlotPill from "./index";
import userEvent from "@testing-library/user-event";

describe("TimeSlotPill", () => {
  it("renders correctly", () => {
    const { getByText } = render(<TimeSlotPill hour="10:00 AM" onClick={vi.fn()} />);
    const hourElement = getByText("10:00 AM");
    expect(hourElement).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClickMock = vi.fn();
    const user = userEvent.setup();
    render(<TimeSlotPill hour="10:00 AM" onClick={onClickMock} />);
    const timeSlotPill = screen.getByText("10:00 AM");
    await user.click(timeSlotPill);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("applies selected styles when isSelected is true", () => {
    render(<TimeSlotPill hour="10:00 AM" isSelected={true} onClick={vi.fn()} />);
    const timeSlotPill = screen.getByTestId("time-slot-pill");
    expect(timeSlotPill).not.toHaveClass(/border/);
    expect(timeSlotPill).toHaveClass("bg-teal");
    expect(timeSlotPill.querySelector("span")).toHaveClass("text-white");
  });

  it("applies default styles when isSelected is false", () => {
    render(<TimeSlotPill hour="10:00 AM" isSelected={false} onClick={vi.fn()} />);
    const timeSlotPill = screen.getByTestId("time-slot-pill");
    expect(timeSlotPill).toHaveClass("border");
    expect(timeSlotPill).toHaveClass("bg-white");
    expect(timeSlotPill.querySelector("span")).toHaveClass("text-deep-teal");
  });
});
