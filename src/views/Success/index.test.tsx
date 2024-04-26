import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SuccessPage from "./index";

const navigateMock = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => navigateMock,
}));

describe("SuccessPage", () => {
  it("renders success message and button", () => {
    render(<SuccessPage />);

    const successMessage = screen.getByText("Your appointment was booked!");
    const confirmationMessage = screen.getByText("You will receive a confirmation email shortly.");
    const thankYouMessage = screen.getByText("Thank you for using MediBooker!");
    const button = screen.getByRole("button", { name: "Book another appointment" });

    expect(successMessage).toBeInTheDocument();
    expect(confirmationMessage).toBeInTheDocument();
    expect(thankYouMessage).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("navigates to the home page when the button is clicked", async () => {
    const user = userEvent.setup();
    render(<SuccessPage />);

    const button = screen.getByRole("button", { name: "Book another appointment" });
    await user.click(button);

    expect(navigateMock).toHaveBeenCalledWith("/");
  });
});
