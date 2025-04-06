// choices.js
export const choiceArray = [
  {
    option1: {
      description: "Eat the cake",
      image: require("@/assets/images/cake.webp"),
      healthEffect: -10,
      pollutionEffect: 5,
    },
    option2: {
      description: "Don't eat the cake",
      image: require("@/assets/images/cake.webp"),
      healthEffect: 5,
      pollutionEffect: 0,
    },
  },
  {
    option1: {
      description: "Walk in the park",
      image: require("@/assets/images/cake.webp"),
      healthEffect: 20,
      pollutionEffect: -5,
    },
    option2: {
      description: "Stay indoors",
      image: require("@/assets/images/cake.webp"),
      healthEffect: 10,
      pollutionEffect: 2,
    },
  },
  // Add more linked choices as needed
];
