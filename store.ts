// store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import tempData from "../PollutePet/temp.json";
import countryData from "../PollutePet/airData.json";

type TempEntry = { Year: number; No_Smoothing: number };
type CountryYearData = { year: number; value: number };
type CountryDataEntry = { name: string; code: string; data: CountryYearData[] };

interface GameState {
  year: number;
  location: string;
  health: number;
  pollution: number;
  happiness: number;
  tickSpeed: number; // milliseconds per tick
  setLocation: (location: string) => void;
  tick: () => void;
  startGameLoop: () => void;
  stopGameLoop: () => void;
  isRunning: boolean;
}

let intervalId: NodeJS.Timeout | null = null;

export const useGame = create<GameState>()(
  persist(
    (set, get) => ({
      year: 1990,
      location: "",
      health: 100,
      pollution: 0,
      happiness: 100,
      tickSpeed: 15000, // 1 year every 15 seconds
      isRunning: false,

      setLocation: (location) => set({ location }),

      tick: () => {
        const { year, location, health, pollution, happiness } = get();
        const nextYear = year + 1;
        if (nextYear > 2020) {
          get().stopGameLoop();
          return;
        }

        const temp = (tempData as TempEntry[]).find(t => t.Year === nextYear);
        const country = (countryData as CountryDataEntry[]).find(c => c.name === location);
        const countryYearValue = country?.data.find(d => d.year === nextYear)?.value ?? 0;

        const tempEffect = temp ? temp.No_Smoothing * 10 : 0;
        const pollutionEffect = countryYearValue;

        const newHealth = Math.max(0, health - tempEffect - pollutionEffect / 10);
        const newHappiness = Math.max(0, happiness - pollutionEffect / 20);
        const newPollution = Math.min(100, pollution + pollutionEffect / 5);

        set({
          year: nextYear,
          health: newHealth,
          happiness: newHappiness,
          pollution: newPollution,
        });
      },

      startGameLoop: () => {
        if (intervalId) return;
        const tickSpeed = get().tickSpeed;
        intervalId = setInterval(() => get().tick(), tickSpeed);
        set({ isRunning: true });
      },

      stopGameLoop: () => {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
          set({ isRunning: false });
        }
      },
    }),
    { name: "pollute-pet" }
  )
);
