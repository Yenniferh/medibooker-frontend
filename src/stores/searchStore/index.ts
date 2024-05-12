import { create } from "zustand";

type State = {
  query?: string;
};

export const useSearchStore = create<State>(() => ({
  query: undefined,
}));

export const updateQuery = (query?: string) => useSearchStore.setState(() => ({ query }));
