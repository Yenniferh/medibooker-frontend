import DoctorIcon from "@/assets/doctor.svg?react";
import DatePill from "@/components/DatePill";
import TimeSlotPill from "@/components/TimeSlotPill";
import Button from "@/components/Button";
import { Doctor, RemoteDoctor, mapRemoteDoctorToLocal } from "@/types/doctor";
import { useAxiosFetch } from "@/hooks/useAxiosFetch";
import { endpoints } from "@/api/endpoints";

const DoctorDetails = ({ id }: { id: string }) => {
  const { data, error, loading } = useAxiosFetch<RemoteDoctor>(`${endpoints.doctors}/${id}`, {
    method: "GET",
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const doctor: Doctor = mapRemoteDoctorToLocal(data!);

  return (
    <div className="max-w-2xl p-5 sm:mx-auto sm:pt-8 lg:pt-12">
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
      <section className="mt-5 flex flex-col gap-4">
        <h2 className="font-headings text-deep-teal md:text-xl">Availability</h2>
        <ol className="flex min-w-full gap-2 overflow-x-auto p-2 xs:mx-auto xs:w-[26rem] xs:min-w-0">
          <DatePill date="2024-04-21" onClick={() => console.log("clicked 2024-04-21")} />
          <DatePill date="2024-04-22" onClick={() => console.log("clicked 2024-04-22")} />
          <DatePill date="2024-04-23" onClick={() => console.log("clicked 2024-04-23")} />
          <DatePill date="2024-04-24" onClick={() => console.log("clicked 2024-04-24")} />
          <DatePill
            date="2024-04-25"
            onClick={() => console.log("clicked 2024-04-25")}
            isSelected
          />
          <DatePill date="2024-04-26" onClick={() => console.log("clicked 2024-04-26")} />
          <DatePill date="2024-04-27" onClick={() => console.log("clicked 2024-04-27")} />
          <DatePill date="2024-04-28" onClick={() => console.log("clicked 2024-04-28")} />
          <DatePill date="2024-04-29" onClick={() => console.log("clicked 2024-04-29")} />
          <DatePill date="2024-04-30" onClick={() => console.log("clicked 2024-04-30")} />
          <DatePill date="2024-05-01" onClick={() => console.log("clicked 2024-05-01")} />
          <DatePill date="2024-05-02" onClick={() => console.log("clicked 2024-05-02")} />
          <DatePill date="2024-05-03" onClick={() => console.log("clicked 2024-05-03")} />
          <DatePill date="2024-05-04" onClick={() => console.log("clicked 2024-05-04")} />
          <DatePill date="2024-05-05" onClick={() => console.log("clicked 2024-05-05")} />
          <DatePill date="2024-05-06" onClick={() => console.log("clicked 2024-05-06")} />
          <DatePill date="2024-05-07" onClick={() => console.log("clicked 2024-05-07")} />
          <DatePill date="2024-05-08" onClick={() => console.log("clicked 2024-05-08")} />
          <DatePill date="2024-05-09" onClick={() => console.log("clicked 2024-05-09")} />
          <DatePill date="2024-05-10" onClick={() => console.log("clicked 2024-05-10")} />
          <DatePill date="2024-05-11" onClick={() => console.log("clicked 2024-05-11")} />
          <DatePill date="2024-05-12" onClick={() => console.log("clicked 2024-05-12")} />
          <DatePill date="2024-05-13" onClick={() => console.log("clicked 2024-05-13")} />
          <DatePill date="2024-05-14" onClick={() => console.log("clicked 2024-05-14")} />
          <DatePill date="2024-05-15" onClick={() => console.log("clicked 2024-05-15")} />
        </ol>
        <ol className="mb-2 flex flex-wrap justify-center gap-2 pt-1 xs:mx-auto xs:max-w-80">
          <TimeSlotPill hour="08:00 AM" onClick={() => console.log("clicked 08:00 AM")} />
          <TimeSlotPill hour="09:00 AM" onClick={() => console.log("clicked 09:00 AM")} />
          <TimeSlotPill
            hour="10:00 AM"
            onClick={() => console.log("clicked 10:00 AM")}
            isSelected
          />
          <TimeSlotPill hour="11:00 AM" onClick={() => console.log("clicked 11:00 AM")} />
          <TimeSlotPill hour="12:00 PM" onClick={() => console.log("clicked 12:00 PM")} />
          <TimeSlotPill hour="01:00 PM" onClick={() => console.log("clicked 01:00 PM")} />
          <TimeSlotPill hour="02:00 PM" onClick={() => console.log("clicked 02:00 PM")} />
          <TimeSlotPill hour="03:00 PM" onClick={() => console.log("clicked 03:00 PM")} />
          <TimeSlotPill hour="04:00 PM" onClick={() => console.log("clicked 04:00 PM")} />
          <TimeSlotPill hour="05:00 PM" onClick={() => console.log("clicked 05:00 PM")} />
          <TimeSlotPill hour="06:00 PM" onClick={() => console.log("clicked 06:00 PM")} />
          <TimeSlotPill hour="07:00 PM" onClick={() => console.log("clicked 07:00 PM")} />
        </ol>
        <Button>Book Appointment</Button>
      </section>
    </div>
  );
};

export default DoctorDetails;
