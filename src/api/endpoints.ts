export const endpoints = {
  doctors: "/doctors",
  doctor: (id: string) => `/doctors/${id}`,
  doctorAvailability: (id: string) => `/doctors/${id}/availabilities`,
};
