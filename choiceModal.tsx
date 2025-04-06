// ChoiceModal.tsx
import React from "react";
import { Modal, TouchableOpacity, Text, Image, View } from "react-native";
import { commonStyles } from "@/commonStyles";

type ChoiceModalProps = {
  isModalVisible: boolean;
  currentChoice: Choice | null;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  applyChoiceEffect: (
    option: any,
    health: number,
    setHealth: React.Dispatch<React.SetStateAction<number>>,
    pollutionLevel: number,
    setPollutionLevel: React.Dispatch<React.SetStateAction<number>>,
    setCurrentChoice: React.Dispatch<React.SetStateAction<Choice | null>>,
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  setIsBusy: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChoiceModal: React.FC<ChoiceModalProps> = ({
  isModalVisible,
  currentChoice,
  setIsModalVisible,
  applyChoiceEffect,
  setIsBusy,
}) => {
  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View style={commonStyles.modalOverlay}>
        <Text style={commonStyles.promptText}>{currentChoice?.prompt}</Text>
        <View style={commonStyles.choicesContainer}>
          {/* 🔥 Add the prompt text here */}

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
                setIsModalVisible
              );
              setIsBusy(false);
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
                setIsModalVisible
              );
              setIsBusy(false);
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
      </View>
    </Modal>
  );
};

export default ChoiceModal;
