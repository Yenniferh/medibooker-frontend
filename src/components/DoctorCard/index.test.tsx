import { render, screen } from "@testing-library/react";
import DoctorCard from "./index";
import userEvent from "@testing-library/user-event";

describe("DoctorCard", () => {
  const mockOnClick = vi.fn();

  it("should render the doctor card correctly", () => {
    render(
      <DoctorCard
        name="Dr. John Doe"
        speciality="Cardiology"
        yearsOfExperience={10}
        consultationPrice={100}
        onClick={mockOnClick}
      />,
    );

    expect(screen.getByTestId("doctor-card")).toBeInTheDocument();
    expect(screen.getByText("Dr. John Doe")).toBeInTheDocument();
    expect(screen.getByText("Cardiology | 10 Years")).toBeInTheDocument();
    expect(screen.getByText(/^\$100/)).toBeInTheDocument();
  });

  it("should call onClick when the doctor card is clicked", async () => {
    const user = userEvent.setup();
    render(
      <DoctorCard
        name="Dr. John Doe"
        speciality="Cardiology"
        yearsOfExperience={10}
        consultationPrice={100}
        onClick={mockOnClick}
      />,
    );

    const doctorCard = screen.getByTestId("doctor-card");
    await user.click(doctorCard);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
