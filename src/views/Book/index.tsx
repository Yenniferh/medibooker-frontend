import { useParams } from "react-router-dom";
import Form from "./Form";

const BookingPage = () => {
  const { doctorId, timeSlot } = useParams();
  console.log(doctorId, timeSlot);
  return (
    <div className="px-4 pb-4 pt-8 sm:mx-auto sm:w-[40rem] sm:pt-12">
      <h1 className="mb-4 font-headings text-3xl text-deep-teal md:text-5xl">Book Appointment</h1>
      <p className="mb-8 font-body text-lg text-deep-teal md:text-xl">
        Fill in the form below to book an appointment with Dr. {doctorId} on {timeSlot}
      </p>
      <Form />
    </div>
  );
};

export default BookingPage;
