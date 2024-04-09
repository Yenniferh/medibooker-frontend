import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  test("renders button with correct text", () => {
    const buttonText = "Click me";
    const { getByText } = render(<Button onClick={() => {}} text={buttonText} />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick function when button is clicked", async () => {
    const onClickMock = vi.fn();
    const user = userEvent.setup();
    const { getByText } = render(<Button onClick={onClickMock} text="Click me" />);
    const buttonElement = getByText("Click me");
    await user.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  test("renders disabled button", () => {
    const buttonText = "Disabled Button";
    const { getByText } = render(<Button onClick={() => {}} text={buttonText} disabled />);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeDisabled();
  });

  test("does not call onClick function when disabled button is clicked", async () => {
    const onClickMock = vi.fn();
    const user = userEvent.setup();
    const { getByText } = render(<Button onClick={onClickMock} text="Disabled Button" disabled />);
    const buttonElement = getByText("Disabled Button");
    await user.click(buttonElement);
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
