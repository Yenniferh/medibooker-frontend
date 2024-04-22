import { render, screen } from "@testing-library/react";
import Button from "./index";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  const onClick = vi.fn();

  test("renders button with correct label", () => {
    const label = "Click me";
    render(<Button label={label} onClick={onClick} />);
    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick function when button is clicked", async () => {
    const user = userEvent.setup();
    render(<Button label="Click me" onClick={onClick} />);
    const buttonElement = screen.getByText("Click me");
    await user.click(buttonElement);
    expect(onClick).toHaveBeenCalled();
  });
});
