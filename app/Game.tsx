import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

const GameScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(""); // State for storing selected location

  // Fetch the saved city when the component mounts
  useEffect(() => {
    const getSavedLocation = async () => {
      try {
        const savedLocation = await AsyncStorage.getItem("selectedLocation");
        if (savedLocation) {
          setSelectedLocation(savedLocation); // Set the saved location in state
        }
      } catch (error) {
        console.error("Error fetching saved location:", error);
      }
    };
    getSavedLocation(); // Call the function to get saved location on mount
  }, []);

  // Handle when the user starts the game
  const handleStart = async () => {
    if (selectedLocation) {
      try {
        // Save the selected location to AsyncStorage
        await AsyncStorage.setItem("selectedLocation", selectedLocation);
        navigation.navigate("Play"); // Navigate to the Play screen
      } catch (error) {
        Alert.alert("Error saving your city choice.");
        console.error("Error saving selected city:", error);
      }
    } else {
      // Alert if no city is selected
      Alert.alert("Please select a starting city.");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/cityBackground.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Choose Your Starting Location</Text>

        {/* Picker to select the starting location */}
        <Picker
          selectedValue={selectedLocation}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedLocation(itemValue)}
        >
          <Picker.Item label="United States" value="United States" />
          <Picker.Item label="China" value="China" />
          <Picker.Item label="Japan" value="Japan" />
          <Picker.Item label="Spain" value="Spain" />
        </Picker>

        {/* Enter button to proceed */}
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Enter</Text>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
    padding: 30,
    width: "80%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: "100%",
    color: "#fff",
    marginBottom: 40,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default GameScreen;
