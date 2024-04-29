import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("renders button with correct label", () => {
    const label = "Click me";
    render(<Button>{label}</Button>);
    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();
  });
});
