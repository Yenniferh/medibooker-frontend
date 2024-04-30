import { render, screen } from "@testing-library/react";
import DoctorCard from "./index";

describe("DoctorCard", () => {
  it("should render the doctor card correctly", () => {
    render(
      <DoctorCard
        name="Dr. John Doe"
        speciality="Cardiology"
        yearsOfExperience={10}
        consultationPrice={100}
        url="https://example.com"
      />,
    );

    expect(screen.getByTestId("doctor-card")).toBeInTheDocument();
    expect(screen.getByText("Dr. John Doe")).toBeInTheDocument();
    expect(screen.getByText("Cardiology | 10 Years")).toBeInTheDocument();
    expect(screen.getByText(/^\$100/)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "https://example.com");
  });
});
