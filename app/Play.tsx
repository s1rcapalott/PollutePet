import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { choiceArray } from "../choiceArray"; // Ensure this import is correct

// Dummy state for health and pollution levels
const PlayScreen = ({ route }) => {
  const navigation = useNavigation();
  const { cityName } = route.params;

  const [health, setHealth] = useState(100);
  const [pollutionLevel, setPollutionLevel] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [currentChoice, setCurrentChoice] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
  const [year, setYear] = useState(2000); // Initial year

  useEffect(() => {
    const interval = setInterval(() => {
      setYear((prevYear) => prevYear + 1); // Increment year
    }, 6000); // 60 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  useEffect(() => {
    if (year !== 2025) {
      chooseRandomChoice(); // Show a new choice when year increases
    }
  }, [year]);

  // Function to simulate the pollution affecting health
  const increasePollution = () => {
    if (pollutionLevel < 100) {
      setPollutionLevel(pollutionLevel + 10);
      setHealth(health - 5); // Reduces health by 5 as pollution increases
    }
  };

  // Function to simulate the game reset
  const resetGame = () => {
    setHealth(100);
    setPollutionLevel(0);
  };

  // Determine the background image based on pollution level
  const getBackgroundImage = () => {
    if (pollutionLevel > 75) {
      return require("../assets/images/ruble.png"); // High pollution background
    } else if (pollutionLevel > 50) {
      return require("../assets/images/scaryCity.png"); // Medium pollution background
    } else if (pollutionLevel > 25) {
      return require("../assets/images/cityBasic.png"); // Low pollution background
    } else {
      return require("../assets/images/niceCity.png"); // Clean city background
    }
  };

  const fadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn(); // Trigger the fade effect whenever pollution level changes
  }, [pollutionLevel]);

  const chooseRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    const selectedChoice = choiceArray[randomIndex];
    setCurrentChoice(selectedChoice);
    setIsModalVisible(true); // Show the modal when a choice is made
  };

  const applyChoiceEffect = (option) => {
    setHealth(health + option.healthEffect);
    setPollutionLevel(pollutionLevel + option.pollutionEffect);
    setCurrentChoice(null); // Clear choices after one is selected
    setIsModalVisible(false); // Close the modal after selection
  };

  useEffect(() => {
    chooseRandomChoice(); // Choose a random choice at the start
  }, []);

  return (
    <ImageBackground
      source={getBackgroundImage()} // Set the background image dynamically
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/happyPet.png")} // Your character image
          style={styles.character}
          resizeMode="contain"
        />
        <Text style={styles.title}>{cityName}</Text>

        {/* Display health and pollution stats */}
        <Text style={styles.stats}>Health: {health}%</Text>
        <Text style={styles.stats}>Pollution Level: {pollutionLevel}%</Text>
        <Text style={styles.stats}>Year: {year}</Text>

        {/* Modal for choices */}
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.choicesContainer}>
              {/* Left Choice */}
              <TouchableOpacity
                style={styles.choiceSide}
                onPress={() => applyChoiceEffect(currentChoice?.option1)}
              >
                <Image
                  source={currentChoice?.option1.image}
                  style={styles.optionImage}
                />
                <Text style={styles.optionDescription}>
                  {currentChoice?.option1.description}
                </Text>
              </TouchableOpacity>

              {/* Right Choice */}
              <TouchableOpacity
                style={styles.choiceSide}
                onPress={() => applyChoiceEffect(currentChoice?.option2)}
              >
                <Image
                  source={currentChoice?.option2.image}
                  style={styles.optionImage}
                />
                <Text style={styles.optionDescription}>
                  {currentChoice?.option2.description}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Buttons for gameplay */}
        <TouchableOpacity
          style={styles.button}
          onPress={increasePollution} // Increases pollution and decreases health
        >
          <Text style={styles.buttonText}>Increase Pollution</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={resetGame} // Resets the game stats
        >
          <Text style={styles.secondaryButtonText}>Reset Game</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.navigate("Home")} // Goes back to home screen
        >
          <Text style={styles.exitButtonText}>Back to Main Menu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
    padding: 30,
  },
  character: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  stats: {
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#003366",
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
  },
  secondaryButtonText: {
    color: "#003366",
    fontSize: 16,
    fontWeight: "500",
  },
  exitButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  exitButtonText: {
    color: "#003366",
    fontSize: 18,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 51, 102, 0.85)", // Deep translucent blue
  },
  choicesContainer: {
    backgroundColor: "#dbefff", // Light pastel blue
    borderRadius: 20,
    padding: 20,
    width: "90%",
    height: "75%",
    borderColor: "#3399ff",
    borderWidth: 2,
    flexDirection: "row", // Side-by-side layout
    justifyContent: "space-between",
  },
  choiceSide: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    marginHorizontal: 10,
    padding: 10,
  },
  optionImage: {
    width: "100%",
    height: "75%",
    resizeMode: "contain",
    marginBottom: 10,
  },
  optionDescription: {
    fontSize: 20,
    fontWeight: "800",
    color: "#003366",
    textAlign: "center",
    fontFamily: "Helvetica Neue",
  },
});

export default PlayScreen;
