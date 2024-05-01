import { TimeSlotPillProps } from "./types";

const TimeSlotPill: React.FC<TimeSlotPillProps> = ({ hour, onClick, isSelected = false }) => {
  const selectedClass = isSelected
    ? "bg-teal"
    : "border border-teal-gray border-opacity-25 bg-white";
  const selectedTextClass = isSelected ? "text-white" : "text-deep-teal";
  return (
    <li
      data-testid="time-slot-pill"
      onClick={onClick}
      className={`cursor-pointer rounded-xl px-4 py-1.5 ${selectedClass}`}
    >
      <span
        className={`flex min-w-16 justify-center self-center font-body text-xs font-medium ${selectedTextClass}`}
      >
        {hour}
      </span>
    </li>
  );
};

export default TimeSlotPill;
