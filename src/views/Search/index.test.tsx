import { render, screen } from "@testing-library/react";
import SearchPage from "./index";

describe("SearchPage", () => {
  it("renders search input", () => {
    render(<SearchPage />);
    const searchInput = screen.getByPlaceholderText("Search by name or specialization");
    expect(searchInput).toBeInTheDocument();
  });

  it("renders doctor cards", () => {
    render(<SearchPage />);
    const doctorCards = screen.getAllByTestId("doctor-card");
    expect(doctorCards).toHaveLength(9);
  });
});
