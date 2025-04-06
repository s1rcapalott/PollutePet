
type EndType = "good" | "bad" | "neutral" | "death" | "climate_hero";

interface EndCheckParams {
  health: number;
  happiness: number;
  airPollution: number;
  temperature: number;
}

export const determineEnding = ({
  health,
  happiness,
  airPollution,
  temperature,
}: EndCheckParams): EndType | null => {
  if (health <= 0) return "death";

  if (airPollution > 90 && temperature > 3 && happiness < 20 && health < 40) {
    return "bad";
  }

  if (airPollution < 20 && temperature < 1.5 && health > 90 && happiness > 80) {
    return "climate_hero";
  }

  if (health > 60 && happiness > 50) return "good";

  return "neutral";
};
