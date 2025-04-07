// choices.js
export const linkedChoices = [
  {
    prompt: "It's time to go to school, how will you send your pet to school?",

    option1: {
      description: "Drive to school",
      image: require("@/assets/images/driving.jpg"),
      healthEffect: -10,
      pollutionEffect: 5,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Cars emit greenhouse gases like carbon dioxide and nitrogen oxides, which contribute to both climate change and respiratory issues. Daily car commutes are one of the largest sources of urban air pollution."
    },
    option2: {
      description: "Bike to school",
      image: require("@/assets/images/bike.jpg"),
      healthEffect: 5,
      pollutionEffect: 0,
      happinessEffect: 2,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Biking produces zero emissions and improves cardiovascular health. If just 1 out of every 10 people biked instead of drove, global carbon emissions could drop by millions of tons annually."
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
      effectText: "Spending time in green spaces reduces stress and improves air quality. Trees and plants in parks act as natural air filters by absorbing carbon dioxide and other pollutants."
    },
    option2: {
      description: "Go on a motorcycle in the dunes",
      image: require("@/assets/images/motorcycle.jpg"),
      healthEffect: -10,
      pollutionEffect: 5,
      happinessEffect: 6,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Off-raod vehicles like motorcycles release harmful exhaust gases and stir up dust that contributres to local air pollution. Their high emissions and fuel use also increase your carbon footprint."
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
      effectText: "Air conditioners use hydroflourocarbons (HFCs), which are up to 3,000 times more potent than carbon dioxide in warming the planet. Even small leaks can significantly worsen climate change."
    },
    option2: {
      description: "Open the windows",
      image: require("@/assets/images/window.jpg"),
      healthEffect: 0,
      pollutionEffect: -3,
      happinessEffect: -2,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Natural ventilitaion reduces both indoor air pollutants and energy consumption. In cities, reducing AC usage during peak heat can also preven 'brownouts' from overloaded power grids."
    }
  },
  {
    prompt: "Your pet is feeling a little risky and somehow convinced you to be apart of the adventure. What will you two deliquents do?",

    option1: {
      description: "Burn down a nuclear power plant",
      image: require("@/assets/images/nuclearpowerplant.jpg"),
      healthEffect: -10,
      pollutionEffect: 5,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Altough burning down a nuclear power plant might sound wild, nuclear energy actually produces zero air pollution during operation, It's one of the cleanes sources of large scale energy."
    },
    option2: {
      description: "Create a cure for cancer",
      image: require("@/assets/images/doctor.webp"),
      healthEffect: 6,
      pollutionEffect: -3,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Many cancer-causing pollutants like benzene and formaldehyde come from buring fossil fuels. So clean air = healthier pets and people."
    }

  },
  {
    prompt: "Your pet wants to give back to the community what will you do together?",

    option1: {
      description: "Plant trees in the local park",
      image: require("@/assets/images/planttrees.jpg"),
      healthEffect: 5,
      pollutionEffect: -7,
      happinessEffect: 4,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "A single mature tree can absorb about 48 pounds of carbon dioxide a year. Meaning parks are nature's silent climate warriors."
    },
    option2: {
      description: "Volunteer at an animal shelter",
      image: require("@/assets/images/animalshelter.jpg"),
      healthEffect: 4,
      pollutionEffect: -2,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Animal shelters use lots of energy for lighting and AC. Volunteering can help raise awareness about how shelters can go green too."
    }
  },
  {
    prompt: "You discover your pet's favorite toy is made by a factory that uses child labor. What will you do?",

    option1: {
      description: "Keep buying the toy because it makes your pet happy.",
      image: require("@/assets/images/pettoy.jpg"),
      healthEffect: -10,
      pollutionEffect: 3,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Factories using cheap labor often skimp on environmental regulations too. Pollution from these factories can contanimate air, water, and even toy materials."
    },
    option2: {
      description: "Replace the toy with a local one, making your pet sad",
      image: require("@/assets/images/replacetoy.png"),
      healthEffect: 3,
      pollutionEffect: -2,
      happinessEffect: 2,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Local toy makers often use less packaging, cleaner materials, and fewer transportation miles."
    }
  },
  {
    prompt: "Your city is replacing green parks with luxury condos. You can protest or proft. What will you do?",

    option1: {
      description: "Join the protest to save the park",
      image: require("@/assets/images/parkprotest.png"),
      healthEffect: 4,
      pollutionEffect: -4,
      happinessEffect: 3,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Urban green spaces reduce heat, absorb carbon dioxide, and improve air quality. Cities without them become 'heat-islands' - way hotter and smoggier."
    },
    option2: {
      description: "Invest early and earn big returns, make it easy to provide for your pet.",
      image: require("@/assets/images/luxurycondos.png"),
      healthEffect: -10,
      pollutionEffect: 5,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Luxury condos often mean more air conditioning, more cats, and more emissiosn. Gentrification is not just social - it can be environmental too."
    },
  },
  {
    prompt: "You can build your pet a dream house, but it requires cutting down a forest. What will you do?",

    option1: {
      description: "Go ahead and build the house",
      image: require("@/assets/images/treecutting.jpg"),
      healthEffect: -10,
      pollutionEffect: 6,
      happinessEffect: 7,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Forests are the lungs of the planet. one tree stores up to 46 pounds Clear-cutting them for homes turns carbon sinks into carbon sources."
    },
    option2: {
      description: "Build a tiny eco-home instead",
      image: require("@/assets/images/tinyhome.png"),
      healthEffect: 3,
      pollutionEffect: -2,
      happinessEffect: 3,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Tiny homes have a tiny carbon footprint! less space means heating, cooling, and lighting - making them surprisingly powerful against climate change."
    }
  },

  {
    prompt: "An energy company offers you free unlimited electricity...from coal.",

    option1: {
      description: "Accept and enjoy unlimited power",
      image: require("@/assets/images/coalpower.webp"),
      healthEffect: -10,
      pollutionEffect: 9,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Coal is still the single biggest source of human-made carbon dioxide. Burning coal realeases more radiation into the air than a nuclear plant ever will."
    },
    option2: {
      description: "Invest in solar panels instead",
      image: require("@/assets/images/solarpanel.jpg"),
      healtEffect: 4,
      pollutionEffect: -4,
      happinessEffect: 3,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Solar panels pay back their environmental cost in just 1-4 years - then provide clean energy for 25+ years. That's long-term pet care energy!"
    }
  },
  {
    prompt: "It's grocery day! Your pet is excited for some snacks! How will you shop?",

    option1: {
      description: "Order everything online with express delivery",
      image: require("@/assets/images/grocerydelivery.jpg"),
      healthEffect: -10,
      pollutionEffect: 5,
      happinessEffect: 3,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Returning online orders generates 15 million metric tons of carbon dioxide a year - thats equivalent to driving 3 million cars nonstop."
    },
    option2: {
      description: "Walk to the local market with reusable bags",
      image: require("@/assets/images/farmerswalk.jpg"),
      healtEffect: 2,
      pollutionEffect: -2,
      happinessEffect: 2,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Walking not only emits zero carbon dioxide, but reusable bags can eliminate over 5000 sinlge-use plastic bags across their lifetime."
    }
  },
  {
    prompt: "Your pet accidentally dropped its phone, now you have to buy a new one. What do you decide?",

    option1: {
      description: "Get the latest model and throw away the old one",
      image: require("@/assets/images/newphone.webp"),
      healthEffect: -10,
      pollutionEffect: 4,
      happinessEffect: 4,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Your smartphone probably traveled farther to reach you than you'll travel in a year. Manufacturing one emits 85 kg of carbon dioxide. "
    },
    option2: {
      description: "Buy a refurbished phone and recycle your old one",
      image: require("@/assets/images/refurbished.webp"),
      healthEffect: -10,
      pollutionEffect: -3,
      happinessEffect: -2,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Refurbishing electronics uses up to 80% less energy than manufacturing new ones - and keeps toxic e-waste out of landfills."
    }
  },
  {
    prompt: "You're going to be busy this whole week so you decide to meal plan. Which choice would you take?",

    option1: {
      description: "Buy lots of meat and packaged frozen meals",
      image: require("@/assets/images/frozenMeat.webp"),
      healtEffect: 2,
      pollutionEffect: 6,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "A single cow can burp out up to 100 kg of methane a year - thats equivalent to driving a car 1,200 miles."
    },
    option2: {
      desctription: "Plan a mostly plant-based, low-waste menu",
      image: require("@/assets/images/plantbased.jpg"),
      healthEffect: 5,
      pollutionEffect: -4,
      happinessEffect: 4,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Switching to a plant-based diet can cut your food-related carbon footprint by up to 73% - and it's deliciously effective."
    }
  },
  {
    prompt: "You are headed to to a pet shop to get your pet groomed, but you are running late to your appointment. How will you get there?",

    option1: {
      description: "Drive your car fast",
      image: require('@/assets/images/speeding.jpg'),
      healthEffect: 6,
      pollutionEffect: 6,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Tires actually cause more pollution than tailpipes - modern tires shed tiny particles as you drive, which end up in the air and oceans."
    },
    option2: {
      description: "Take public transportation",
      image: require("@/assets/images/publictransport.jpg"),
      healthEffect: 2,
      pollutionEffect: -3,
      happinessEffect: 1,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Public transportation emits up to 45% less carbon dioxide per passenger mile than private vehicles."
    }
  },
  {
    prompt: "You and your pet are doing spring cleaning. How will you deal with the old clothes and toys?",

    option1: {
      description: "Throw them all in the trash",
      image: require('@/assets/images/clothestrash.jpg'),
      healthEffect: -10,
      pollutionEffect: 5,
      happinessEffect: 1,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "The average American throws away 37 kg of clothing per year- and most of it ends up releasing methane in landfills."
    },
    option2: {
      description: "Donate or repurpose them into rags or crafts",
      image: require("@/assets/images/donateclothes.jpg"),
      healthEffect: 2,
      pollutionEffect: -3,
      happinessEffect: 3,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText:"Repurposing just 1 ton of textiles saves 20 tons of carbon dioxide emission."
    }
  },
  {
    prompt: "You're planning a weekend gataway for you and your pet. What do you book?",

    option1: {
      description: "Round-trip flight to a distant city",
      image: require('@/assets/images/airtravel.jpg'),
      healthEffect: -5,
      pollutionEffect: 7,
      happinessEffect: 5,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "One round-trip flight emits more carbon dioxide than planting 200 trees can absorb in a year. Your seat comes with a carbon trail."
    },
    option2: {
      description: "Road trip to a nearby nature spot",
      image: require("@/assets/images/nature.jpg"),
      healthEffect: 3,
      pollutionEffect: -1,
      happinessEffect: 4,
      temperatureEffect: (this.pollutionEffect * 0.02) - (this.healthEffect * 0.005),
      effectText: "Local nature trips not only reduce emissions - they boost your mental health and help support conservation-focused areas."
    }
  },
  // Add more linked choices as needed
];