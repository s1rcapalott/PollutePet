

const checkEndCondition = () => {
    // Example thresholds, tweak them as needed
    if (health <= 0) {
      console.log("Your Tamagotchi has died 💀");
      navigation.navigate("GameOver", { ending: "death" });
      return;
    }
  
    if (airPollution > 80 && temperature > 2.5 && happiness < 20 && health < 30) {
      console.log("You got the bad ending 😞");
      navigation.navigate("GameOver", { ending: "bad" });
      return;
    }
  
    if (health > 90 && happiness > 80 && airPollution < 20 && temperature < 1.5) {
      console.log("You got the good ending 🎉");
      navigation.navigate("GameOver", { ending: "good" });
      return;
    }
  
    // Otherwise, keep playing
  };
  