import { render, screen } from "@testing-library/react";
import Input from "./index";
import "@testing-library/jest-dom";

describe("Input Component", () => {
  const mockRegister = vi.fn();

  it("renders input element with correct placeholder", () => {
    render(
      <Input
        label="Email"
        type="email"
        name="email"
        register={mockRegister}
        placeholder="Enter your email"
      />,
    );

    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });

  it("displays the label with required asterisk when required", () => {
    render(
      <Input label="Email" type="email" name="email" register={mockRegister} required={true} />,
    );

    expect(screen.getByText("Email*")).toBeInTheDocument();
  });

  it("applies error styling and displays error message when there is an error", () => {
    const errorMessage = "Invalid email";
    render(
      <Input
        label="Email"
        type="email"
        name="email"
        register={mockRegister}
        error={{ message: errorMessage, type: "pattern" }}
      />,
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveClass("input-error");
  });

  it("calls register function with correct name and validation rules", () => {
    render(
      <Input label="Email" type="email" name="email" register={mockRegister} required={true} />,
    );

    expect(mockRegister).toHaveBeenCalledWith("email", {
      required: { value: true, message: "Required field" },
    });
  });
});
