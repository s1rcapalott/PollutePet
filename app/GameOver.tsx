
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";

const endingMessages = {
  death: "Your Tamagotchi didn't make it 💀",
  bad: "The pollution was too much... 🏭",
  neutral: "Your Tamagotchi survived, but just barely.",
  good: "You managed to keep things stable!",
  climate_hero: "Amazing! You helped your Tamagotchi thrive in a clean world 🌎✨",
};

const endingImages ={
  death: require("../images/death.png"),
  bad: require("../images/bad.png"),
  neutral: require("../images/neutral.png"),
  good: require("../images/good.png"),
  climate_hero: require("../images/climate_hero.png"),
}
const GameOverScreen = ({ route, navigation }) => {
  const { ending } = route.params;
  const message = endingMessages[ending] || "Game Over";
  const image = endingImages[ending];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      {image && <Image source={image} style={styles.image} />}
      <Text style={styles.message}>{message}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
};

// 2. Add image style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: "#fff",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 30,
  },
  message: {
    fontSize: 18,
    color: "#ccc",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default GameOverScreen;