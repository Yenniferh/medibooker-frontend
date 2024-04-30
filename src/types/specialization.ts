export interface RemoteSpecialization {
  id: number;
  name: string;
  description: string;
}

export type Specialization = {
  name: string;
};

export const mapRemoteSpecializationToLocal = (
  remoteSpecialization: RemoteSpecialization,
): Specialization => ({
  name: remoteSpecialization.name,
});
