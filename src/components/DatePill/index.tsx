import { format } from "date-fns";
import { DatePillProps } from "./types";

const DatePill: React.FC<DatePillProps> = ({ date, onClick, isSelected = false }) => {
  const selectedClass = isSelected
    ? "bg-teal"
    : "border border-teal-gray border-opacity-25 bg-white";
  const selectedTextClass = isSelected ? "text-white" : "text-deep-teal";
  const formattedDate = `${format(new Date(`${date} 00:00:00`), "ccc dd")}`;
  const [weekday, day] = formattedDate.split(" ");

  return (
    <li
      data-testid="date-pill"
      onClick={onClick}
      className={`flex min-w-12 flex-col justify-center rounded-2xl p-2 ${selectedClass}`}
    >
      <span className={`${selectedTextClass} text-center font-headings text-xs font-extrabold`}>
        {weekday}
      </span>
      <span className={`${selectedTextClass} text-center font-body text-sm`}>{day}</span>
    </li>
  );
};

export default DatePill;
