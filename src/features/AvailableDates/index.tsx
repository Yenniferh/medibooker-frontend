import DatePill from "@/components/DatePill";
import { updateSelectedDate, useTimeSlotStore } from "@/stores/timeSlotStore";

const AvailableDates = ({ dates }: { dates: string[] }) => {
  const { date: selectedDate } = useTimeSlotStore();
  return (
    <>
      {dates.map((date) => (
        <DatePill
          key={date}
          date={date}
          onClick={() => updateSelectedDate(date)}
          isSelected={date === selectedDate}
        />
      ))}
    </>
  );
};

export default AvailableDates;
