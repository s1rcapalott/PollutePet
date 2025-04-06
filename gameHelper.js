// gameHelpers.js
import { Animated } from "react-native";

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
  export const chooseRandomChoice = (choiceArray, setCurrentChoice, setIsModalVisible) => {
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    const selectedChoice = choiceArray[randomIndex];
    setCurrentChoice(selectedChoice);
    setIsModalVisible(true); // Show the modal when a choice is made
  };
  
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
  