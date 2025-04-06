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
import {
  increasePollution,
  resetGame,
  getBackgroundImage,
  chooseRandomChoice,
  applyChoiceEffect,
  fadeIn,
} from "../gameHelper"; // Import helper functions

const PlayScreen = ({ route }) => {
  const navigation = useNavigation();
  const { cityName } = route.params;

  const [health, setHealth] = useState(100);
  const [pollutionLevel, setPollutionLevel] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [currentChoice, setCurrentChoice] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [year, setYear] = useState(2000); // Initial year
  const [yearModalVisible, setYearModalVisible] = useState(false);
  const [yearMessage, setYearMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setYear((prevYear) => prevYear + 1);
    }, 60000); // 60 seconds to simulate year increment

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (year !== 2000) {
      chooseRandomChoice(choiceArray, setCurrentChoice, setIsModalVisible);

      const msg =
        pollutionLevel > 70
          ? "The air is getting worse... people are coughing."
          : health < 50
          ? "Your community’s health is declining."
          : "The city is doing okay... for now.";

      setYearMessage(msg);
      setYearModalVisible(true);

      setTimeout(() => {
        setYearModalVisible(false);
      }, 3500);
    }
  }, [year]);

  useEffect(() => {
    fadeIn(fadeAnim); // Trigger the fade effect when pollution level changes
  }, [pollutionLevel]);

  return (
    <ImageBackground
      source={getBackgroundImage(pollutionLevel)} // Set the background image dynamically
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/happyPet.png")}
          style={styles.character}
          resizeMode="contain"
        />
        <Text style={styles.title}>{cityName}</Text>

        <Text style={styles.stats}>Health: {health}%</Text>
        <Text style={styles.stats}>Pollution Level: {pollutionLevel}%</Text>
        <Text style={styles.stats}>Year: {year}</Text>

        <Modal visible={yearModalVisible} transparent animationType="fade">
          <View style={styles.yearModalOverlay}>
            <View style={styles.yearModalContainer}>
              <Text style={styles.yearText}>Year: {year}</Text>
              <Text style={styles.yearMessage}>{yearMessage}</Text>
            </View>
          </View>
        </Modal>

        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.choicesContainer}>
              <TouchableOpacity
                style={styles.choiceSide}
                onPress={() =>
                  applyChoiceEffect(
                    currentChoice?.option1,
                    health,
                    setHealth,
                    pollutionLevel,
                    setPollutionLevel,
                    setCurrentChoice,
                    setIsModalVisible
                  )
                }
              >
                <Image
                  source={currentChoice?.option1.image}
                  style={styles.optionImage}
                />
                <Text style={styles.optionDescription}>
                  {currentChoice?.option1.description}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.choiceSide}
                onPress={() =>
                  applyChoiceEffect(
                    currentChoice?.option2,
                    health,
                    setHealth,
                    pollutionLevel,
                    setPollutionLevel,
                    setCurrentChoice,
                    setIsModalVisible
                  )
                }
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

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            increasePollution(
              pollutionLevel,
              setPollutionLevel,
              health,
              setHealth
            )
          }
        >
          <Text style={styles.buttonText}>Increase Pollution</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => resetGame(setHealth, setPollutionLevel)}
        >
          <Text style={styles.secondaryButtonText}>Reset Game</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.exitButtonText}>Back to Main Menu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  yearModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  yearModalContainer: {
    backgroundColor: "#3399ff",
    padding: 30,
    borderRadius: 20,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  yearText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  yearMessage: {
    fontSize: 18,
    color: "#e6f7ff",
    textAlign: "center",
  },
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
