// src/store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

import metrics from "./Data.json";   // ETL output


type Metrics = { 
    Year: number; 
    pm25: number; 
    FoodWaste: number; 
    WaterPollution: number; 
    Plastics: number };

interface GameState {
  year: number;
  breathing: number;
  hydration: number;
  happiness: number;
  shownEvents: Record<number, boolean>;   // story events already shown?
  tick: () => void;
}

const metricsByYear = new Map<number, Metrics>(
  (metrics as Metrics[]).map(m => [m.Year, m])
);

export const useGame = create<GameState>()(
  persist(
    (set, get) => ({
      year: 1925,
      breathing: 100,
      hydration: 100,
      happiness: 100,
      shownEvents: {},
      tick: () => {
        const next = get().year + 1;
        const m = metricsByYear.get(next);
        if (!m) return;                         // reached 2025
        set(state => ({
          year: next,
          breathing: Math.max(0, state.breathing + (m.pm25 > 50 ? -2 : -1)),
          hydration: Math.max(0, state.hydration + (m.WaterPollution > 6 ? -2 : -1)),
          happiness: Math.max(0, state.happiness + (m.Plastics > 1 ? -1 : 0)),
        }));
      },
    }),
    { name: "pollute-pet" }                     // AsyncStorage key
  )
);
