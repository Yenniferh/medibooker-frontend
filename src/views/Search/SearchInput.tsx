import { updateQuery } from "@/stores/searchStore";
import { useRef } from "react";

const SearchInput = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (!searchInputRef.current) return;

    const query = searchInputRef.current.value;
    updateQuery(query);
  };

  return (
    <>
      <label htmlFor="search" className="hidden">
        Search
      </label>
      <input
        id="search"
        className="w-full rounded-3xl border-none bg-white bg-opacity-40 px-4 py-3 font-body text-sm text-deep-teal backdrop-blur-sm placeholder:text-white focus:ring-white"
        type="text"
        ref={searchInputRef}
        onBlur={handleSearch}
        placeholder="Search by name or specialization"
      />
    </>
  );
};

export default SearchInput;
