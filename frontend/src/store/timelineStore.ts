import { create } from "zustand";

interface TimelineEvent {
  agent: string;
  status: string;
  message: string;
}

interface TimelineState {
  events: TimelineEvent[];

  addEvent: (
    event: TimelineEvent
  ) => void;

  clearEvents: () => void;
}

export const useTimelineStore =
  create<TimelineState>((set) => ({

    events: [],

    addEvent: (event) =>
      set((state) => ({
        events: [
          ...state.events,
          event
        ]
      })),

    clearEvents: () =>
      set({
        events: []
      })
  }))