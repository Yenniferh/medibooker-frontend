import { useCounterStore } from "@/counterStore";

function App() {
  const counter = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);
  const decrease = useCounterStore((state) => state.decrease);

  return (
    <div>
      <h1 className="text-center">MediBooker</h1>
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
