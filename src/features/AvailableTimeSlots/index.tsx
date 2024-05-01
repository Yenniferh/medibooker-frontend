import TimeSlotPill from "@/components/TimeSlotPill";
import { updateSelectedTimeSlotId, useTimeSlotStore } from "@/stores/timeSlotStore";
import { TimeSlot } from "@/types/timeSlot";

const AvailableTimeSlots = ({ timeSlots }: { timeSlots: TimeSlot[] }) => {
  const { timeSlotId } = useTimeSlotStore();
  return (
    <>
      {timeSlots.map((timeSlot) => (
        <TimeSlotPill
          key={timeSlot.id}
          hour={timeSlot.hour}
          onClick={() => updateSelectedTimeSlotId(`${timeSlot.id}`)}
          isSelected={`${timeSlot.id}` === timeSlotId}
        />
      ))}
    </>
  );
};

export default AvailableTimeSlots;
