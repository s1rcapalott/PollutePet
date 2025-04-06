// gameHelpers.js
import { Animated } from "react-native";
import { linkedChoices } from "./choiceArray";

// Function to simulate the pollution affecting health
export const increasePollution = (pollution, setPollution, health, setHealth) => {
  const newPollution = Math.min(pollution + 10, 100); // ✅ cap at 100
  setPollution(newPollution);
  setHealth(prev => Math.max(0, prev - 5)); // ✅ clamp health ≥ 0
};
  
  // Function to reset the game stats
  export const resetGame = (setHealth, setPollutionLevel) => {
    setHealth(100);
    setSeenChoices(new Set());
    setPollutionLevel(0);
  };
  
  // Function to get background image based on pollution level
  export const getBackgroundImage = (pollutionLevel) => {
    if (pollutionLevel > 75) {
      return require("@/assets/images/ruble.png");
    } else if (pollutionLevel > 50) {
      return require("@/assets/images/scaryCity.png");
    } else if (pollutionLevel > 25) {
      return require("@/assets/images/cityBasic.png");
    } else {
      return require("@/assets/images/niceCity.png");
    }
  };
  
  // Function to choose a random option for the modal
  export function getUnseenRandomChoice(seenChoices) {
    const unseen = linkedChoices.filter(choice => !seenChoices.has(choice.prompt));
  
    if (unseen.length === 0) {
      // Reset the seenChoices set when all choices have been shown
      console.log('All choices have been seen. Resetting seen choices.');
  
      // Reset the seen choices to show all choices again
      seenChoices.clear();
  
      // Return a random choice from the full linkedChoices array
      return linkedChoices[Math.floor(Math.random() * linkedChoices.length)];
    }
  
    return unseen[Math.floor(Math.random() * unseen.length)];
  }
  
  
  
  
  // Function to apply choice effects on health and pollution
  export const applyChoiceEffect = (
    option,
    health,
    setHealth,
    pollutionLevel,
    setPollutionLevel,
    setCurrentChoice,
    setIsModalVisible,
    setShowEffectText,
    setEffectText,
    setIsBusy
  ) => {
    const effectText = option.effectText; // Assuming each option has an effectText
    setEffectText(effectText);
    setShowEffectText(true); // Show effect text
  
    // Simulate a delay for reading the effect text (e.g., 2 seconds)
    setTimeout(() => {
      setShowEffectText(false); // Hide effect text after the delay
  
      // Apply the effect of the choice using the latest values
      setHealth(prevHealth => prevHealth + option.healthEffect); // Update health based on the previous value
      setPollutionLevel(prevPollutionLevel => prevPollutionLevel + option.pollutionEffect); // Update pollution level
  
      // Proceed to the next choice or hide the modal
      setIsModalVisible(false); // Close the modal
      setIsBusy(false); // Set isBusy to false after processing the choice
  
      // Optionally reset the current choice if needed
      setCurrentChoice(null); // Clear the current choice
    }, 3000); // Adjust the delay to your preference (e.g., 2000ms = 2 seconds)
  };
  
  
  // Function to handle fade in animation
  export const fadeIn = (fadeAnim) => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  