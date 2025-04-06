import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
  TextInput,
  FlatList,
  TouchableHighlight,
} from "react-native";

const cities = ["United States", "China", "Japan", "Spain"]; // List of cities

const GameScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(""); // State for storing the selected location
  const [filteredCities, setFilteredCities] = useState([]); // State for filtering cities based on input
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Filter cities based on the search query
    if (query) {
      const results = cities.filter((city) =>
        city.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCities(results);
    } else {
      setFilteredCities([]);
    }
  };

  const handleCitySelect = (city) => {
    setSelectedLocation(city); // Set the selected city
    setSearchQuery(city); // Update search query with selected city
    setFilteredCities([]); // Clear the filtered results
  };

  const handleStart = () => {
    if (selectedLocation) {
      // If a location is selected, navigate to the next screen
      navigation.navigate("Play", { cityName: selectedLocation });
    } else {
      // Alert if no location is selected
      Alert.alert("Please select a starting city.");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/niceCity.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Choose Your Starting Location</Text>

        {/* TextInput for city search */}
        <TextInput
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder="Type a country name"
          style={styles.textInput}
        />

        {/* Show the list of filtered cities if the search query is not empty */}
        {filteredCities.length > 0 && (
          <FlatList
            data={filteredCities}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={() => handleCitySelect(item)}>
                <View style={styles.listItem}>
                  <Text style={styles.listItemText}>{item}</Text>
                </View>
              </TouchableHighlight>
            )}
            keyExtractor={(item) => item}
            style={styles.list}
          />
        )}

        {/* Enter button to proceed to the next screen */}
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
    width: "80%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  list: {
    width: "100%",
    maxHeight: 200,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  listItemText: {
    color: "#fff",
    fontSize: 18,
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
