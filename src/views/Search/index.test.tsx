import { act, render, screen } from "@testing-library/react";
import SearchPage from "./index";
import { Doctor } from "@/types/doctor";
import * as useAxiosFetch from "@/hooks/useAxiosFetch";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AxiosError } from "axios";

describe("SearchPage", () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. John Doe",
      description: "Cardiologist",
      experience: 10,
      consultationPrice: 100,
      specializations: [{ name: "Cardiology" }],
    },
    {
      id: 2,
      name: "Dr. Jane Doe",
      description: "Cardiologist",
      experience: 15,
      consultationPrice: 150,
      specializations: [{ name: "Cardiology" }],
    },
  ];

  const component = (
    <MemoryRouter initialEntries={["/doctor/1"]}>
      <Routes>
        <Route path="/doctor/:doctorId" element={<SearchPage />} />
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

    it("renders error message", () => {
      expect(screen.getByText("Error: An error occurred")).toBeInTheDocument();
    });
  });

  describe("when loaded", () => {
    beforeEach(async () => {
      vi.spyOn(useAxiosFetch, "useAxiosFetch").mockReturnValue({
        data: doctors,
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

    it("renders search input", () => {
      const searchInput = screen.getByPlaceholderText("Search by name or specialization");
      expect(searchInput).toBeInTheDocument();
    });

    it("renders doctor cards", () => {
      const doctorCards = screen.getAllByTestId("doctor-card");
      expect(doctorCards).toHaveLength(2);
    });
  });
});
