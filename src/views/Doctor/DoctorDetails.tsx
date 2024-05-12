import DoctorIcon from "@/assets/doctor.svg?react";
import { Doctor, RemoteDoctor, mapRemoteDoctorToLocal } from "@/types/doctor";
import { useAxiosFetch } from "@/hooks/useAxiosFetch";
import { endpoints } from "@/api/endpoints";

const DoctorDetails = ({ id }: { id: string }) => {
  const { data, error, loading } = useAxiosFetch<RemoteDoctor>(endpoints.doctor(id), {
    method: "GET",
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const doctor: Doctor = mapRemoteDoctorToLocal(data!);

  return (
    <>
      <section className="flex">
        <div className="flex w-[7.5rem] items-center justify-center">
          <DoctorIcon width={120} height={100} />
        </div>
        <div className="flex w-auto flex-1 flex-col justify-center p-2 xs:pl-5">
          <h1 className="text font-headings leading-none text-deep-teal md:text-xl">
            {doctor?.name}
          </h1>
          <p className="font-headings text-xs tracking-tight text-teal-gray md:text-sm">
            {doctor?.specializations[0]?.name} | {doctor?.experience} Years
          </p>
          <p className="mt-2 font-body text-sm font-medium text-teal md:text-base">
            ${doctor?.consultationPrice}/hour
          </p>
        </div>
      </section>
      <section className="mt-5 flex flex-col gap-4">
        <h2 className="font-headings text-deep-teal md:text-xl">About</h2>
        <p className="font-body text-xs font-light leading-snug text-deep-teal md:text-sm">
          {doctor?.description}
        </p>
      </section>
    </>
  );
};

export default DoctorDetails;
