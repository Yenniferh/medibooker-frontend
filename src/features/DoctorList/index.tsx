import DoctorCard from "@/components/DoctorCard";
import { Doctor } from "@/types/doctor";

const DoctorList = ({ items }: { items: Doctor[] }) => {
  return (
    <>
      {items.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          name={doctor.name}
          speciality={doctor.specializations[0].name}
          yearsOfExperience={doctor.experience}
          consultationPrice={doctor.consultationPrice}
          url={`/doctors/${doctor.id}`}
        />
      ))}
    </>
  );
};

export default DoctorList;
