import { render, screen } from "@testing-library/react";
import DatePill from "./index";
import userEvent from "@testing-library/user-event";

describe("DatePill", () => {
  const mockOnClick = vi.fn();

  it("should render the date correctly", () => {
    const { getByText } = render(
      <DatePill date="2022-01-01" onClick={mockOnClick} isSelected={false} />,
    );

    expect(getByText("Sat")).toBeInTheDocument();
    expect(getByText("01")).toBeInTheDocument();
  });

  it("should call onClick when clicked", async () => {
    vi.clearAllMocks();
    const user = userEvent.setup();
    render(<DatePill date="2022-01-01" onClick={mockOnClick} isSelected={false} />);

    const datePill = screen.getByTestId("date-pill");
    await user.click(datePill);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("should have the correct styles when isSelected is true", () => {
    render(<DatePill date="2022-01-01" onClick={mockOnClick} isSelected={true} />);

    const datePill = screen.getByTestId("date-pill");
    const spans = datePill.querySelectorAll("span");

    expect(datePill).toHaveClass("bg-teal");
    expect(datePill).not.toHaveClass("border");
    expect(spans).toHaveLength(2);
    spans.forEach((span) => {
      expect(span).toHaveClass("text-white");
    });
  });

  it("should have the correct styles when isSelected is false", () => {
    render(<DatePill date="2022-01-01" onClick={mockOnClick} isSelected={false} />);

    const datePill = screen.getByTestId("date-pill");
    const spans = datePill.querySelectorAll("span");

    expect(datePill).toHaveClass("border");
    expect(datePill).toHaveClass("bg-white");
    expect(spans).toHaveLength(2);
    spans.forEach((span) => {
      expect(span).toHaveClass("text-deep-teal");
    });
  });
});
