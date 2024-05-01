import { endpoints } from "@/api/endpoints";
import Button from "@/components/Button";
import AvailableDates from "@/features/AvailableDates";
import AvailableTimeSlots from "@/features/AvailableTimeSlots";
import { useAxiosFetch } from "@/hooks/useAxiosFetch";
import {
  updateSelectedDate,
  updateSelectedTimeSlotId,
  useTimeSlotStore,
} from "@/stores/timeSlotStore";
import { TimeSlot } from "@/types/timeSlot";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const DoctorAvailability = ({ id }: { id: string }) => {
  const { data, error, loading } = useAxiosFetch<Record<string, TimeSlot[]>>(
    endpoints.doctorAvailability(id),
    {
      method: "GET",
    },
  );
  const { date: selectedDate, timeSlotId } = useTimeSlotStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      updateSelectedDate(Object.keys(data)[0]);
    }

    return () => {
      updateSelectedDate("");
      updateSelectedTimeSlotId("");
    };
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="mt-5 flex flex-col gap-4">
      <h2 className="font-headings text-deep-teal md:text-xl">Availability</h2>
      <ol className="flex min-w-full gap-2 overflow-x-auto p-2 xs:mx-auto xs:w-[26rem] xs:min-w-0">
        <AvailableDates dates={Object.keys(data ?? {})} />
      </ol>
      <ol className="mb-2 flex flex-wrap justify-center gap-2 pt-1 xs:mx-auto xs:max-w-80">
        <AvailableTimeSlots timeSlots={data?.[selectedDate] ?? []} />
      </ol>
      <Button
        disabled={!selectedDate || !timeSlotId}
        onClick={() => navigate(`/doctors/${id}/book/${timeSlotId}`)}
      >
        Book Appointment
      </Button>
    </section>
  );
};

export default DoctorAvailability;
