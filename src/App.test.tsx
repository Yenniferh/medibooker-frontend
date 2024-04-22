import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe.skip("Counter", () => {
  test("should render with initial state of 0", async () => {
    renderCounter();

    expect(await screen.findByText(/0$/)).toBeInTheDocument();
    expect(await screen.findByRole("button", { name: /Increment/i })).toBeInTheDocument();
    expect(await screen.findByRole("button", { name: /Decrease/i })).toBeInTheDocument();
  });

  test("should increase count by clicking the increment button", async () => {
    const user = userEvent.setup();

    renderCounter();

    expect(await screen.findByText(/0$/)).toBeInTheDocument();

    await act(async () => {
      await user.click(await screen.findByRole("button", { name: /Increment/i }));
    });

    expect(await screen.findByText(/1$/)).toBeInTheDocument();
  });

  test("should decrease count by clicking the decrease button", async () => {
    const user = userEvent.setup();

    renderCounter();

    expect(await screen.findByText(/0$/)).toBeInTheDocument();

    await act(async () => {
      await user.click(await screen.findByRole("button", { name: /Decrease/i }));
    });

    expect(await screen.findByText(/-1$/)).toBeInTheDocument();
  });
});

const renderCounter = () => {
  return render(<App />);
};
