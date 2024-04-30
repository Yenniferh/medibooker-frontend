import {
  RemoteSpecialization,
  Specialization,
  mapRemoteSpecializationToLocal,
} from "./specialization";

export interface RemoteDoctor {
  id: number;
  specializations: RemoteSpecialization[];
  name: string;
  years_experience: number;
  description: string;
  consultation_price: number;
}

export type Doctor = {
  id: number;
  specializations: Specialization[];
  name: string;
  experience: number;
  description: string;
  consultationPrice: number;
};

export const mapRemoteDoctorToLocal = (remoteDoctor: RemoteDoctor): Doctor => ({
  id: remoteDoctor.id,
  specializations: remoteDoctor.specializations.map(mapRemoteSpecializationToLocal),
  name: remoteDoctor.name,
  experience: remoteDoctor.years_experience,
  description: remoteDoctor.description,
  consultationPrice: remoteDoctor.consultation_price,
});
