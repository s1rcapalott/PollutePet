// gameHelpers.js
import { Animated } from "react-native";
import { linkedChoices } from "./choiceArray";

// Function to simulate the pollution affecting health
export const increasePollution = (pollutionLevel, setPollutionLevel, health, setHealth) => {
    if (pollutionLevel < 100) {
      setPollutionLevel(pollutionLevel + 10);
      setHealth(health - 5); // Reduces health by 5 as pollution increases
    }
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
    if (unseen.length === 0) return null;
    return unseen[Math.floor(Math.random() * unseen.length)];
  }
  
  
  
  
  // Function to apply choice effects on health and pollution
  export const applyChoiceEffect = (option, health, setHealth, pollutionLevel, setPollutionLevel, setCurrentChoice, setIsModalVisible) => {
    setHealth(health + option.healthEffect);
    setPollutionLevel(pollutionLevel + option.pollutionEffect);
    setCurrentChoice(null); // Clear choices after one is selected
    setIsModalVisible(false); // Close the modal after selection
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
  