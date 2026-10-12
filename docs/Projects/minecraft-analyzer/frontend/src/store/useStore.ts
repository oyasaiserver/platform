import { create } from "zustand";
import type { JobStatus, AnalysisResult } from "../types/api";

interface AppState {
  jobId: string | null;
  jobStatus: JobStatus | null;
  result: AnalysisResult | null;
  activeTab: "stats" | "map" | "depth";
  selectedBlock: string;

  setJobId: (id: string | null) => void;
  setJobStatus: (s: JobStatus | null) => void;
  setResult: (r: AnalysisResult | null) => void;
  setActiveTab: (tab: AppState["activeTab"]) => void;
  setSelectedBlock: (block: string) => void;
  reset: () => void;
}

export const useStore = create<AppState>((set) => ({
  jobId: null,
  jobStatus: null,
  result: null,
  activeTab: "stats",
  selectedBlock: "minecraft:grass_block",

  setJobId: (id) => set({ jobId: id }),
  setJobStatus: (s) => set({ jobStatus: s }),
  setResult: (r) => set({ result: r }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedBlock: (block) => set({ selectedBlock: block }),
  reset: () =>
    set({
      jobId: null,
      jobStatus: null,
      result: null,
      activeTab: "stats",
      selectedBlock: "minecraft:grass_block",
    }),
}));
