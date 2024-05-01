import { Doctor, RemoteDoctor, mapRemoteDoctorToLocal } from "@/types/doctor";
import DoctorList from "@/features/DoctorList";
import { useAxiosFetch } from "@/hooks/useAxiosFetch";
import { endpoints } from "@/api/endpoints";

const SearchPage = () => {
  const { loading, data, error } = useAxiosFetch<RemoteDoctor[]>(`${endpoints.doctors}`, {
    method: "GET",
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const doctors: Doctor[] = data?.map(mapRemoteDoctorToLocal) ?? [];

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
          <label htmlFor="search" className="hidden">
            Search
          </label>
          <input
            id="search"
            className="w-full rounded-3xl border-none bg-white bg-opacity-40 px-4 py-3 font-body text-sm text-deep-teal backdrop-blur-sm placeholder:text-white focus:ring-white"
            type="text"
            placeholder="Search by name or specialization"
          />
        </div>
      </div>
      <ol className="flex flex-col gap-4 px-4 py-5">
        <DoctorList items={doctors} />
      </ol>
    </div>
  );
};

export default SearchPage;
