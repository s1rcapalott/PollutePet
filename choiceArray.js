export const linkedChoices = [
  {
    prompt: "It's time to go to school, how will you send your pet to school?",

    option1: {
      description: "Drive to school",
      image: require("@/assets/images/driving.jpg"),
      healthEffect: -3,
      pollutionEffect: 5,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Driving a car significantly contributes to CO2 emissions. In 2019, transportation accounted for 29% of global greenhouse gas emissions, with road vehicles being the largest contributor. Cars alone emit an average of 4.6 metric tons of CO2 per year."
    },
    option2: {
      description: "Bike to school",
      image: require("@/assets/images/bike.jpg"),
      healthEffect: 5,
      pollutionEffect: 0,
      happinessEffect: 2,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Biking has zero direct emissions and is a sustainable, eco-friendly way to reduce your carbon footprint. Transportation is a leading source of global CO2 emissions, and biking is an effective way to help mitigate climate change."
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
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Walking has no emissions and is one of the most eco-friendly activities you can do. Walking or hiking outdoors not only improves physical health but helps reduce the overall reliance on fossil fuel-based transportation, decreasing the environmental impact."
    },
    option2: {
      description: "Go on a motorcycle in the dunes",
      image: require("@/assets/images/motorcycle.jpg"),
      healthEffect: -2,
      pollutionEffect: 5,
      happinessEffect: 6,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Motorcycles, although more fuel-efficient than cars, still contribute to global emissions. In 2018, the transportation sector accounted for 23% of global CO2 emissions. Motorcycles contribute to air pollution and climate change, with significant health impacts from exhaust gases."
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
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Using air conditioning increases electricity consumption, often powered by fossil fuels. Fossil fuel-based power plants contribute to approximately 64% of global electricity generation, emitting substantial amounts of CO2. This increases the carbon footprint and accelerates climate change."
    },
    option2: {
      description: "Open the windows",
      image: require("@/assets/images/window.jpg"),
      healthEffect: 0,
      pollutionEffect: -3,
      happinessEffect: -2,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Opening windows allows natural ventilation and reduces the need for air conditioning. This simple action helps conserve energy and reduces CO2 emissions. In 2020, energy consumption in buildings, including heating and cooling, accounted for 13% of global greenhouse gas emissions."
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
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Nuclear power plants produce significant amounts of energy without direct CO2 emissions. However, destroying one could lead to catastrophic environmental consequences, including radiation leaks and lasting ecological damage. Nuclear power provides about 10% of the world's electricity and is a low-carbon alternative to fossil fuels."
    },
    option2: {
      description: "Create a cure for cancer",
      image: require("@/assets/images/doctor.webp"),
      healthEffect: 6,
      pollutionEffect: -3,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "While medical research can increase energy demand and result in emissions, the societal benefits of advancing healthcare, like curing cancer, far outweigh short-term environmental costs. The global healthcare sector accounts for 4.4% of global emissions, but its long-term impact on human health is invaluable."
    },
    seen: false,
    

  },
  // Add more linked choices as needed
];
