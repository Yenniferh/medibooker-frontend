export interface RemoteTimeSlot {
  id: number;
  date: string;
  hour: string;
  is_available: boolean;
}

export type TimeSlot = {
  id: number;
  date: string;
  hour: string;
  isAvailable: boolean;
};

export const mapRemoteTimeSlotToLocal = (remoteTimeSlot: RemoteTimeSlot): TimeSlot => ({
  id: remoteTimeSlot.id,
  date: remoteTimeSlot.date,
  hour: remoteTimeSlot.hour,
  isAvailable: remoteTimeSlot.is_available,
});
