import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "@/views/Search/SearchInput";
import { updateQuery } from "@/stores/searchStore";

vi.mock("@/stores/searchStore", () => ({
  updateQuery: vi.fn(),
}));

describe("SearchInput", () => {
  it("renders the search input", () => {
    render(<SearchInput />);
    const searchInput = screen.getByPlaceholderText("Search by name or specialization");
    expect(searchInput).toBeInTheDocument();
  });

  it("calls updateQuery when search input loses focus", () => {
    render(<SearchInput />);
    const searchInput = screen.getByPlaceholderText("Search by name or specialization");
    fireEvent.blur(searchInput);
    expect(updateQuery).toHaveBeenCalled();
  });

  it("updates query when search input loses focus", () => {
    render(<SearchInput />);
    const searchInput = screen.getByPlaceholderText("Search by name or specialization");
    fireEvent.change(searchInput, { target: { value: "test query" } });
    fireEvent.blur(searchInput);
    expect(updateQuery).toHaveBeenCalledWith("test query");
  });
});
