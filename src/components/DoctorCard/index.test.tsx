import { render, screen } from "@testing-library/react";
import DoctorCard from "./index";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("DoctorCard", () => {
  it("should render the doctor card correctly", () => {
    render(
      <MemoryRouter initialEntries={["/doctor/1"]}>
        <Routes>
          <Route
            path="/doctor/:doctorId"
            element={
              <DoctorCard
                name="Dr. John Doe"
                speciality="Cardiology"
                yearsOfExperience={10}
                consultationPrice={100}
                url="https://example.com"
              />
            }
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("doctor-card")).toBeInTheDocument();
    expect(screen.getByText("Dr. John Doe")).toBeInTheDocument();
    expect(screen.getByText("Cardiology | 10 Years")).toBeInTheDocument();
    expect(screen.getByText(/^\$100/)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "https://example.com");
  });
});
