import { endpoints } from "@/api/endpoints";
import { api } from "@/api/instance";
import { Doctor, mapRemoteDoctorToLocal } from "@/types/doctor";

export const fetchDoctors = async (): Promise<Doctor[]> => {
  const response = await api.get(endpoints.doctors);
  return response.data.map(mapRemoteDoctorToLocal);
};
