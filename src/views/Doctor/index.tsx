import { useParams } from "react-router-dom";
import DoctorDetails from "./DoctorDetails";
import DoctorAvailability from "./DoctorAvailability";

const DoctorPage = () => {
  const { doctorId } = useParams();
  if (!doctorId) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="max-w-2xl p-5 sm:mx-auto sm:pt-8 lg:pt-12">
      <DoctorDetails id={doctorId} />
      <DoctorAvailability id={doctorId} />
    </div>
  );
};

export default DoctorPage;
