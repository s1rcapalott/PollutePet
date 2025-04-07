type EndType = "good" | "bad" | "neutral" | "death" | "climate_hero" | "going";

interface EndCheckParams {
  health: number;
  happiness: number;
  airPollution: number;
  temperature: number;
  year: number;
}

export const determineEnding = ({
  health,
  happiness,
  airPollution,
  temperature,
  year,
}: EndCheckParams): EndType | null => {
  if (health <= 0) return "death";

  if (
    airPollution > 90 &&
    temperature > 100 &&
    happiness < 20 &&
    health < 40 &&
    year >= 2003
  ) {
    return "bad";
  }

  if (
    airPollution < 20 &&
    temperature < 70 &&
    health > 90 &&
    happiness > 80 &&
    year > 2003
  ) {
    return "climate_hero";
  }

  if (health > 60 && happiness > 50 && year > 2020) return "good";

  if (year > 2003) {
    return "neutral";
  }

  return "going";
};
