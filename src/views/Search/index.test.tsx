import { act, render, screen } from "@testing-library/react";
import SearchPage from "./index";
import { Doctor } from "@/types/doctor";
import * as useService from "@/hooks/useService";
import { MemoryRouter, Route, Routes } from "react-router-dom";

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

  beforeEach(async () => {
    vi.spyOn(useService, "useService").mockReturnValue({
      data: doctors,
      error: undefined,
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
