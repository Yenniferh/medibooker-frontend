import { useCounterStore } from "@/counterStore";
import TimeSlotPill from "@/components/TimeSlotPill";

function App() {
  const counter = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);
  const decrease = useCounterStore((state) => state.decrease);

  return (
    <div>
      <h1 className="text-center">MediBooker</h1>
      <ol className="flex flex-wrap justify-center gap-2 xs:mx-auto xs:max-w-80">
        <TimeSlotPill hour="08:00 AM" onClick={() => console.log("clicked 08:00 AM")} />
        <TimeSlotPill hour="09:00 AM" onClick={() => console.log("clicked 09:00 AM")} />
        <TimeSlotPill hour="10:00 AM" onClick={() => console.log("clicked 10:00 AM")} isSelected />
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
      <div>
        <p className="text-lg">Counter: {counter}</p>
        <button
          className="mx-1 my-1 rounded-sm bg-blue-50 p-2 text-sm text-blue-600"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="mx-1 my-1 rounded-sm bg-blue-50 p-2 text-sm text-blue-600"
          onClick={decrease}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
