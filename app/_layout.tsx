import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index" // Ensure this points to the index screen
        options={{
          headerShown: false, // Hide the header (title bar) at the top
        }}
      />
    </Stack>
  );
}
