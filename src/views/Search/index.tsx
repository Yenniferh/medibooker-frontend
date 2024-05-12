import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="">
      <div
        className="flex h-[11.25rem] flex-col justify-end px-4 pb-2 xs:h-52 md:h-64 md:pb-4"
        style={{ backgroundColor: "#3ca6a6cc" }}
      >
        <div className="xs:mx-auto xs:min-w-96">
          <h1 className="mb-2 font-headings text-xl capitalize text-white md:mb-4 md:text-2xl">
            Let’s find your doctor
          </h1>
          <SearchInput />
        </div>
      </div>
      <ol className="flex flex-col gap-4 px-4 py-5">
        <SearchResult />
      </ol>
    </div>
  );
};

export default SearchPage;
