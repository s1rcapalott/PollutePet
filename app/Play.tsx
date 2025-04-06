import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "./progressbar"; 
import { determineEnding } from '../ending'; // Import the determineEnding function

// Dummy state for health and pollution levels
const PlayScreen = ({ route }) => {
  const navigation = useNavigation();
  const { cityName } = route.params;

  // Move the useState hooks inside the component
  const [health, setHealth] = useState(100);
  const [pollutionLevel, setPollutionLevel] = useState(0);

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

  return (
    <ImageBackground
      source={require("../assets/images/cityBackground.png")} // Background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Pet.png")} // Your character image
          style={styles.character}
          resizeMode="contain"
        />
        <Text style={styles.title}>{cityName}</Text>

        {/* Display health and pollution stats */}
        <ProgressBar label="Health" value={health} icon="heart" color="#f44336" />
        <ProgressBar label="Pollution" value={pollutionLevel} icon="cloud" color="#9E9E9E" />
        <ProgressBar label = "Happiness" value={100 - pollutionLevel} icon="smile-o" color="#FFEB3B" />
        <ProgressBar label = "Temperature" value={Math.random() * 100} icon="thermometer-half" color="#FF9800" />
        // Display the stats using a progress bar.
        // Later, replace this with actual data — likely async state variables.




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
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
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
    color: "#fff",
    marginBottom: 10,
  },
  stats: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  secondaryButton: {
    borderColor: "#4CAF50",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
  },
  secondaryButtonText: {
    color: "#4CAF50",
    fontSize: 16,
  },
  exitButton: {
    backgroundColor: "#f44336", // Red color for the exit button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  exitButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default PlayScreen;
