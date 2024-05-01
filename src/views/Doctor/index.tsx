import { useParams } from "react-router-dom";
import DoctorDetails from "./DoctorDetails";

const DoctorPage = () => {
  const { doctorId } = useParams();
  if (!doctorId) {
    return <div>Doctor not found</div>;
  }

  return <DoctorDetails id={doctorId} />;
};

export default DoctorPage;
