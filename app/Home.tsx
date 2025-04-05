import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/cityBackground.png")} // Background image
      style={styles.background} // Updated background styling
      resizeMode="cover" // Ensures it covers the whole screen
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Pet.png")} // Character image
          style={styles.character}
          resizeMode="contain"
        />
        <Text style={styles.title}>PollutePet</Text>
        <Text style={styles.subtitle}>
          Can your character survive the years of pollution?
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Game")}
        >
          <Text style={styles.buttonText}>Start Journey</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate("History")}
        >
          <Text style={styles.secondaryButtonText}>View Pollution History</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;


import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
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
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
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
  },
  secondaryButtonText: {
    color: "#4CAF50",
    fontSize: 16,
  },
});
