import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  promptText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#fff",
  },
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
  effectText: {
    fontSize: 30, // Adjust the font size as needed
    fontWeight: 'bold',
    color: '#fff', // Text color
    textAlign: 'center', // Center the text
    marginTop: 20, // Optional margin to adjust the position
  },
});


