import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DoctorPage from "./index";

describe("DoctorPage", () => {
  const component = (
    <MemoryRouter initialEntries={["/doctor/1"]}>
      <Routes>
        <Route path="/doctor/:doctorId" element={<DoctorPage />} />
      </Routes>
    </MemoryRouter>
  );
  it("renders doctor information correctly", () => {
    render(component);

    expect(screen.getByText("Dr. Alex Rivera")).toBeInTheDocument();
    expect(screen.getByText("Dermatologist | 10 Years")).toBeInTheDocument();
    expect(screen.getByText("$150")).toBeInTheDocument();
  });

  it("renders availability dates correctly", () => {
    render(component);

    expect(screen.getByText("21")).toBeInTheDocument();
    expect(screen.getByText("22")).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
  });

  it("renders time slots correctly", () => {
    render(component);

    expect(screen.getByText("08:00 AM")).toBeInTheDocument();
    expect(screen.getByText("09:00 AM")).toBeInTheDocument();
    expect(screen.getByText("10:00 AM")).toBeInTheDocument();
  });
});
