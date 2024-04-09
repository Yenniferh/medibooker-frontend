import { create } from "zustand";

type State = {
  counter: number;
  increment: () => void;
  decrease: () => void;
};

const useCounterStore = create<State>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrease: () => set((state) => ({ counter: state.counter - 1 })),
}));

export default useCounterStore;
