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
import { commonStyles } from "@/commonStyles";
import { linkedChoices } from "../choiceArray";
import {
  increasePollution,
  resetGame,
  getBackgroundImage,
  fadeIn,
  applyChoiceEffect,
  getUnseenRandomChoice,
} from "../gameHelper";
import ProgressBar from "./progressbar";
import { determineEnding } from "../ending";
import tempData from '../temp.json';      
import airData from '../airData.json';

const PlayScreen = ({ route }) => {
  interface Choice {
    prompt: string;
    option1: {
      description: string;
      image: any;
      healthEffect: number;
      pollutionEffect: number;
      happinessEffect: number;
      temperatureEffect: number;
    };
    option2: {
      description: string;
      image: any;
      healthEffect: number;
      pollutionEffect: number;
      happinessEffect: number;
      temperatureEffect: number;
    };
    seen: boolean;
  }

  const navigation = useNavigation();
  const { cityName } = route.params;

  const [health, setHealth] = useState(100);
  const [pollutionLevel, setPollutionLevel] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [currentChoice, setCurrentChoice] = useState<Choice | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [year, setYear] = useState(2000);
  const [yearModalVisible, setYearModalVisible] = useState(false);
  const [yearMessage, setYearMessage] = useState("");
  const [seenChoices, setSeenChoices] = useState(new Set());
  const [temperature, setTemperature] = useState(0);


  useEffect(() => {
    const baseYear = 2000;
  
    //  Get base temp for 2000 from temp.json
    const tempEntry = tempData.find(entry => entry.Year === baseYear);
    if (tempEntry) {
      setTemperature(parseFloat(tempEntry.Lowess_5.toFixed(3))); 
    }
  
    
    const cityEntry = airData.find(city => city.name === cityName);
    const cityYearData = cityEntry?.data.find(d => d.year === baseYear);
  
    if (cityYearData) {
      const normalizedPollution = Math.min((cityYearData.value / 300) * 100, 100); 
      setPollutionLevel(normalizedPollution);
    }
  }, []);
    const [isBusy, setIsBusy] = useState(false); // Track if the player is busy with an action
  const [showEffectText, setShowEffectText] = useState(false); // State to control showing the effect text
  const [effectText, setEffectText] = useState(""); // State to store the effect text

  useEffect(() => {
    const interval = setInterval(() => {
      // Only increment the year if the player isn't busy
      if (!isBusy) {
        setYear((prevYear) => prevYear + 1);
        setIsBusy(true); // prevent more increments while handling the event
      }
    }, 1000); // or your desired interval

    return () => clearInterval(interval);
  }, [isBusy]);

  useEffect(() => {
    if (year !== 2000) {
     
      const tempEntry = tempData.find(entry => entry.Year === year);
      if (tempEntry) {
        setTemperature(prev => {
          const base = tempEntry.Lowess_5;
          const diff = 0.01 + (pollutionLevel * 0.001); // increase based on pollution
          return parseFloat((base + diff).toFixed(3));
        });
      }
      
      const msg =
        pollutionLevel > 70
          ? "The air is getting worse... people are coughing."
          : health < 50
          ? "Your community's health is declining."
          : "The city is doing okay... for now.";
  
      setYearMessage(msg);
      setYearModalVisible(true);

      const timer = setTimeout(() => {
        setYearModalVisible(false);

        const newChoice = getUnseenRandomChoice(seenChoices);
        if (newChoice) {
          setCurrentChoice(newChoice);
          setSeenChoices((prev) => new Set(prev).add(newChoice.prompt));
          setIsModalVisible(true);
        } else {
          console.warn(
            "All questions have been shown or getUnseenRandomChoice returned undefined"
          );
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [year]);

  useEffect(() => {
    fadeIn(fadeAnim);
  }, [pollutionLevel]);

  return (
    <ImageBackground
      source={getBackgroundImage(pollutionLevel)}
      style={commonStyles.background}
      resizeMode="cover"
    >
      <View style={commonStyles.container}>
        <Image
          source={require("../assets/images/happyPet.png")}
          style={commonStyles.character}
          resizeMode="contain"
        />
        <Text style={styles.title}>{cityName}</Text>
        <ProgressBar label="Health" value={health} icon="heart" color="#f44336" />
        <ProgressBar label="Air Quality" value={pollutionLevel} icon="cloud" color="#9E9E9E" />
        <ProgressBar label="Happiness" value={100 - pollutionLevel} icon="smile-o" color="#FFEB3B" />
        <ProgressBar label="Global Temp" value={temperature} max={2.0} icon="thermometer-half" color="#FF5722" />
        <Text style={commonStyles.stats}>Year: {year}</Text>

        <Modal visible={yearModalVisible} transparent animationType="fade">
          <View style={commonStyles.yearModalOverlay}>
            <View style={commonStyles.yearModalContainer}>
              <Text style={commonStyles.yearText}>Year: {year}</Text>
              <Text style={commonStyles.yearMessage}>{yearMessage}</Text>
            </View>
          </View>
        </Modal>

        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={commonStyles.modalOverlay}>
            {showEffectText ? (
              // Show the effect text in the center
              <Text style={commonStyles.effectText}>{effectText}</Text>
            ) : (
              // Show the normal modal content (choices)
              <>
                <Text style={commonStyles.promptText}>
                  {currentChoice?.prompt}
                </Text>
                <View style={commonStyles.choicesContainer}>
                  <TouchableOpacity
                    style={commonStyles.choiceSide}
                    onPress={() => {
                      applyChoiceEffect(
                        currentChoice?.option1,
                        health,
                        setHealth,
                        pollutionLevel,
                        setPollutionLevel,
                        setCurrentChoice,
                        setIsModalVisible,
                        setShowEffectText,
                        setEffectText,
                        setIsBusy
                      );
                      setIsBusy(true); // Set isBusy to true to avoid new input during effect text display
                    }}
                  >
                    <Image
                      source={currentChoice?.option1.image}
                      style={commonStyles.optionImage}
                    />
                    <Text style={commonStyles.optionDescription}>
                      {currentChoice?.option1.description}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={commonStyles.choiceSide}
                    onPress={() => {
                      applyChoiceEffect(
                        currentChoice?.option2,
                        health,
                        setHealth,
                        pollutionLevel,
                        setPollutionLevel,
                        setCurrentChoice,
                        setIsModalVisible,
                        setShowEffectText,
                        setEffectText,
                        setIsBusy
                      );
                      setIsBusy(true); // Set isBusy to true to avoid new input during effect text display
                    }}
                  >
                    <Image
                      source={currentChoice?.option2.image}
                      style={commonStyles.optionImage}
                    />
                    <Text style={commonStyles.optionDescription}>
                      {currentChoice?.option2.description}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </Modal>

        <TouchableOpacity
          style={commonStyles.button}
          onPress={() =>
            increasePollution(
              pollutionLevel,
              setPollutionLevel,
              health,
              setHealth
            )
          }
        >
          <Text style={commonStyles.buttonText}>Increase Pollution</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={commonStyles.secondaryButton}
          onPress={() => resetGame(setHealth, setPollutionLevel)}
        >
          <Text style={commonStyles.secondaryButtonText}>Reset Game</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={commonStyles.exitButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={commonStyles.exitButtonText}>Back to Main Menu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default PlayScreen;
