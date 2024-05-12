import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DoctorPage from "./index";
import * as useAxiosFetch from "@/hooks/useAxiosFetch";
import { RemoteDoctor } from "@/types/doctor";
import { AxiosError } from "axios";

// TODO: Split these tests into DoctorAvailability.test.tsx and DoctorDetails.test.tsx
describe.skip("DoctorPage", () => {
  const doctor: RemoteDoctor = {
    id: 1,
    name: "Dr. John Doe",
    description: "Cardiologist",
    years_experience: 10,
    consultation_price: 100,
    specializations: [{ id: 1, name: "Cardiology", description: "Cardiology description" }],
  };

  const component = (
    <MemoryRouter initialEntries={["/doctor/1"]}>
      <Routes>
        <Route path="/doctor/:doctorId" element={<DoctorPage />} />
      </Routes>
    </MemoryRouter>
  );

  describe("when loading", () => {
    beforeEach(() => {
      vi.spyOn(useAxiosFetch, "useAxiosFetch").mockReturnValue({
        data: null,
        error: null,
        loading: true,
      });
      render(component);
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    it("renders loading state", () => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("when error", () => {
    beforeEach(() => {
      vi.spyOn(useAxiosFetch, "useAxiosFetch").mockReturnValue({
        data: null,
        error: new Error("An error occurred") as AxiosError,
        loading: false,
      });
      render(component);
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    it("renders error state", () => {
      expect(screen.getByText("Error: An error occurred")).toBeInTheDocument();
    });
  });

  describe("when data is loaded", () => {
    beforeEach(async () => {
      vi.spyOn(useAxiosFetch, "useAxiosFetch").mockReturnValue({
        data: doctor,
        error: null,
        loading: false,
      });
      await act(async () => {
        render(component);
      });
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    it("renders doctor information correctly", () => {
      expect(screen.getByText(doctor.name)).toBeInTheDocument();
      expect(
        screen.getByText(`${doctor.specializations[0].name} | ${doctor.years_experience} Years`),
      ).toBeInTheDocument();
      expect(screen.getByText(`$${doctor.consultation_price}/hour`)).toBeInTheDocument();
    });

    it("renders availability dates correctly", () => {
      expect(screen.getByText("21")).toBeInTheDocument();
      expect(screen.getByText("22")).toBeInTheDocument();
      expect(screen.getByText("23")).toBeInTheDocument();
    });

    it("renders time slots correctly", () => {
      expect(screen.getByText("08:00 AM")).toBeInTheDocument();
      expect(screen.getByText("09:00 AM")).toBeInTheDocument();
      expect(screen.getByText("10:00 AM")).toBeInTheDocument();
    });
  });
});
