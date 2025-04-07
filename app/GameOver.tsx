import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

const endingMessages = {
  death:
    "Your choices led to uncontrolled pollution and destruction. The oceans are filled with plastic, and the skies are thick with smoke from industrial factories. The land is barren, with no green spaces, only factories and chemical plants that have pushed the natural balance too far. The overall health of the world is in decline, and there’s no coming back from this trajectory.💀",
  bad: "This world is still grappling with the consequences of industrial growth and unsustainable resource use. The effects of climate change are felt everywhere, with storms becoming more violent, and droughts wiping out agricultural regions. The economy is under strain as natural resources dwindle, and health issues are widespread due to air pollution and contaminated water. Despite some attempts to clean up, pollution levels remain dangerously high.🏭",
  neutral:
    "This world is a fragile balance between recovery and further decline. Some areas have cleaner air and more wildlife, but others are still suffering from the effects of climate change. There’s a growing awareness of environmental protection, but it's not enough to reverse the damage done in the past. New green technologies are being developed, and governments are starting to invest in sustainable practices, but the path ahead is uncertain. Your Tamagotchi survived, but it’s clear that the journey toward recovery will take time and more effort..",
  good: "This world represents hope and progress. While it’s not perfect, the worst of the environmental crises have been avoided. Carbon emissions are reduced, and renewable energy is becoming more mainstream. Urban spaces are greener, and policies supporting sustainable practices are beginning to show results. Climate change is no longer the immediate threat it once was, and many communities have adapted to a more eco-friendly lifestyle. The recovery is ongoing, and though there’s still work to be done, the world is on a better path.",
  climate_hero:
    "This is a utopian vision of the future where the damage caused by climate change and pollution has been completely reversed. Renewable energy sources like solar, wind, and hydroelectric power dominate, and fossil fuels have been phased out. Cities are sustainable, with green rooftops, vertical gardens, and efficient waste management systems. The oceans are free from plastic, and the air is fresh and clean. Species that were once endangered are now thriving again, and global temperatures are back to a stable level. Your Tamagotchi thrives in this world, as it's a reflection of the harmony between humans and nature.🌎✨",
};

const endingImages = {
  death: require("../assets/images/death1.png"),
  bad: require("../assets/images/bad.png"),
  neutral: require("../assets/images/neutral.png"),
  good: require("../assets/images/good.png"),
  climate_hero: require("../assets/images/hero.png"),
};
const endingBack = {
  death: require("../assets/images/deadEnd.jpg"),
  bad: require("../assets/images/badEnd.png"),
  neutral: require("../assets/images/cityBasic.png"),
  good: require("../assets/images/nature.jpg"),
  climate_hero: require("../assets/images/heroEnd.png"),
};

const GameOverScreen = ({ route, navigation }) => {
  const { ending } = route.params;
  console.log("ENDING:", ending);
  const message = endingMessages[ending] || "Game Over";
  const image = endingImages[ending];
  const back = endingBack[ending];

  return (
    <ImageBackground
      source={back}
      style={styles.background} // Ensuring it fills the entire screen
      resizeMode="cover" // Maintain the correct aspect ratio
    >
      <View style={styles.container}>
        <Text style={styles.title}>Game Over</Text>

        {/* Display image only if available */}
        {image && <Image source={image} style={styles.image} />}

        <Text style={styles.message}>{message}</Text>

        {/* Play Again Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("Navigating to Home");
            navigation.reset({
              index: 0, // Reset to the first route in the stack
              routes: [{ name: "Home" }], // Navigate to the Home screen
            });
          }}
        >
          <Text style={styles.buttonText}>Play Again</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Make sure it takes up the entire screen
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center horizontally
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay for readability
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain", // Maintain aspect ratio
    marginBottom: 30,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#fff",
  },
  message: {
    fontSize: 20,
    color: "#ccc",
    marginBottom: 40,
    textAlign: "center",
    lineHeight: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default GameOverScreen;
