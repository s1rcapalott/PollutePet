// choices.js
export const linkedChoices = [
  {
    prompt: "It's time to go to school, how will you send your pet to school?",

    option1: {
      description: "Drive to school",
      image: require("@/assets/images/driving.jpg"),
      healthEffect: -3,
      pollutionEffect: 5,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005)
    },
    option2: {
      description: "Bike to school",
      image: require("@/assets/images/bike.jpg"),
      healthEffect: 5,
      pollutionEffect: 0,
      happinessEffect: 2,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005)
    },
    seen: false,
  },
  {
    prompt: "Your pet wants to do an activity today! What will you choose to do with your pet?",

    option1: {
      description: "Have a nice walk in the park",
      image: require("@/assets/images/park.jpg"),
      healthEffect: 5,
      pollutionEffect: -5,
      happinessEffect: 3,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005)
    },
    option2: {
      description: "Go on a motorcycle in the dunes",
      image: require("@/assets/images/motorcycle.jpg"),
      healthEffect: -2,
      pollutionEffect: 5,
      happinessEffect: 6,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005)
    },
    seen: false,
  },
  {
    prompt: "It's a hot summer day, your pet is complaining about the heat. What will you do?",

    option1: {
      description: "Use the AC all day",
      image: require("@/assets/images/ac.jpg"),
      healthEffect: 3,
      pollutionEffect: 6,
      happinessEffect: 3,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005)
    },
    option2: {
      description: "Open the windows",
      image: require("@/assets/images/window.jpg"),
      healthEffect: 0,
      pollutionEffect: -3,
      happinessEffect: -2,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005)
    },
    seen: false,
  },
  {
    prompt: "Your pet is feeling a little risky and somehow convinced you to be apart of the adventure. What will you two deliquents do?",

    option1: {
      description: "Burn down a nuclear power plant",
      image: require("@/assets/images/nuclearpowerplant.jpg"),
      healthEffect: -6,
      pollutionEffect: 10,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005)
    },
    option2: {
      description: "Create a cure for cancer",
      image: require("@/assets/images/doctor.webp"),
      healthEffect: 6,
      pollutionEffect: -3,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005)
    },
    seen: false,

  },
  // Add more linked choices as needed
];

