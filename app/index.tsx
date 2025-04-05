import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "./Game"; // Import Game screen (Game.tsx)
import HomeScreen from "./Home"; // Assuming you have a Home screen (or you can create one)

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Game" component={GameScreen} />
    </Stack.Navigator>
  );
}
