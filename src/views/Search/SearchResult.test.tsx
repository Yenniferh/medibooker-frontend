import { render, screen } from "@testing-library/react";
import SearchResult from "./SearchResult";
import * as useAxiosFetch from "@/hooks/useAxiosFetch";
import { AxiosError } from "axios";
import { MemoryRouter } from "react-router-dom";
import { DOCTORS } from "./testData";

describe("SearchResult", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders loading state", () => {
    vi.spyOn(useAxiosFetch, "useAxiosFetch").mockReturnValue({
      data: null,
      error: null,
      loading: true,
    });
    render(<SearchResult />);
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });

  it("renders error state", () => {
    vi.spyOn(useAxiosFetch, "useAxiosFetch").mockReturnValue({
      data: null,
      error: new Error("An error occurred") as AxiosError,
      loading: false,
    });
    const errorMessage = "An error occurred";
    render(<SearchResult />);
    const errorElement = screen.getByText(`Error: ${errorMessage}`);
    expect(errorElement).toBeInTheDocument();
  });

  it("renders no doctors found message", () => {
    vi.spyOn(useAxiosFetch, "useAxiosFetch").mockReturnValue({
      data: null,
      error: null,
      loading: false,
    });
    render(<SearchResult />);
    const noDoctorsElement = screen.getByText(/No doctors found/i);
    expect(noDoctorsElement).toBeInTheDocument();
  });

  it("renders doctor list", () => {
    const doctors = DOCTORS;
    vi.spyOn(useAxiosFetch, "useAxiosFetch").mockReturnValue({
      data: doctors,
      error: null,
      loading: false,
    });
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchResult />
      </MemoryRouter>,
    );
    const doctorListElement = screen.getAllByTestId("doctor-card");
    expect(doctorListElement).toHaveLength(2);
  });
});
