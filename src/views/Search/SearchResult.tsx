import { endpoints } from "@/api/endpoints";
import DoctorList from "@/features/DoctorList";
import { useAxiosFetch } from "@/hooks/useAxiosFetch";
import { useSearchStore } from "@/stores/searchStore";
import { Doctor, RemoteDoctor, mapRemoteDoctorToLocal } from "@/types/doctor";

const SearchResult = () => {
  const { query } = useSearchStore();
  const { data, loading, error } = useAxiosFetch<RemoteDoctor[]>(`${endpoints.search}`, {
    method: "GET",
    params: { query: query || undefined },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const doctors: Doctor[] = data?.map(mapRemoteDoctorToLocal) ?? [];

  if (doctors.length === 0) return <div>No doctors found</div>;

  return <DoctorList items={doctors} />;
};

export default SearchResult;
