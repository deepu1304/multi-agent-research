import { create } from "zustand";

interface ResearchState {
  loading: boolean;
  results: any;
  setLoading: (loading: boolean) => void;
  setResults: (results: any) => void;
}

export const useResearchStore =
  create<ResearchState>((set) => ({
    loading: false,
    results: null,

    setLoading: (loading) =>
      set({ loading }),

    setResults: (results) =>
      set({ results }),
  }));