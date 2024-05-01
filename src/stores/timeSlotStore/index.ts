import { create } from "zustand";

type State = {
  date: string;
  timeSlotId: string;
};

export const useTimeSlotStore = create<State>(() => ({
  date: "",
  timeSlotId: "",
}));

export const updateSelectedDate = (date: string) =>
  useTimeSlotStore.setState(() => ({ date: date }));

export const updateSelectedTimeSlotId = (timeSlotId: string) =>
  useTimeSlotStore.setState(() => ({ timeSlotId: timeSlotId }));
