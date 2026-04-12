const vehicles = [
  {
    id: "honda-accord",
    make: "Honda",
    model: "Accord Touring",
    type: "Sedan",
    year: 2023,
    price: 28500,
    mileage: "18k mi",
    fuel: "Hybrid",
    transmission: "Automatic",
    engine: "2.0L Hybrid",
    color: "Pearl White",
    seats: 5,
    image: "assets/images/vehicle-sedan.jpg",
    gallery: [
      "assets/images/vehicle-sedan.jpg",
      "assets/images/vehicle-luxury-sedan.jpg",
      "assets/images/showroom-car.jpg"
    ],
    description: "Balanced comfort, strong fuel economy, and a quiet cabin for daily driving.",
    features: ["Adaptive cruise control", "Leather seats", "Sunroof", "Apple CarPlay"]
  },
  {
    id: "toyota-rav4",
    make: "Toyota",
    model: "RAV4 XLE",
    type: "SUV",
    year: 2022,
    price: 31900,
    mileage: "24k mi",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "2.5L Petrol",
    color: "Magnetic Gray",
    seats: 5,
    image: "assets/images/vehicle-suv.jpg",
    gallery: [
      "assets/images/vehicle-suv.jpg",
      "assets/images/vehicle-bmw-suv.jpg",
      "assets/images/showroom-car.jpg"
    ],
    description: "Practical SUV with generous cargo space and a dependable service record.",
    features: ["Blind spot monitor", "Rear camera", "Roof rails", "Dual-zone climate"]
  },
  {
    id: "tesla-model-3",
    make: "Tesla",
    model: "Model 3",
    type: "Electric",
    year: 2023,
    price: 38900,
    mileage: "14k mi",
    fuel: "Electric",
    transmission: "Single-speed",
    engine: "Dual Motor EV",
    color: "Solid Black",
    seats: 5,
    image: "assets/images/vehicle-electric.jpg",
    gallery: [
      "assets/images/vehicle-electric.jpg",
      "assets/images/hero-electric-car.jpg",
      "assets/images/showroom-car.jpg"
    ],
    description: "Clean electric performance with modern driver assistance and fast charging.",
    features: ["Autopilot capable", "Glass roof", "Fast charging", "Premium audio"]
  },
  {
    id: "bmw-x3",
    make: "BMW",
    model: "X3 xDrive",
    type: "SUV",
    year: 2021,
    price: 42750,
    mileage: "31k mi",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "2.0L Turbo",
    color: "Alpine White",
    seats: 5,
    image: "assets/images/vehicle-bmw-suv.jpg",
    gallery: [
      "assets/images/vehicle-bmw-suv.jpg",
      "assets/images/vehicle-suv.jpg",
      "assets/images/showroom-car.jpg"
    ],
    description: "Premium compact SUV with confident handling and a refined interior.",
    features: ["AWD", "Panoramic roof", "Parking sensors", "Memory seats"]
  },
  {
    id: "hyundai-i20",
    make: "Hyundai",
    model: "i20 Sportz",
    type: "Hatchback",
    year: 2022,
    price: 18950,
    mileage: "20k mi",
    fuel: "Petrol",
    transmission: "Manual",
    engine: "1.2L Petrol",
    color: "Fiery Red",
    seats: 5,
    image: "assets/images/vehicle-hatchback.jpg",
    gallery: [
      "assets/images/vehicle-hatchback.jpg",
      "assets/images/vehicle-sedan.jpg",
      "assets/images/showroom-car.jpg"
    ],
    description: "Efficient city car with smart features, easy parking, and low running cost.",
    features: ["Touchscreen display", "Rear parking camera", "ABS", "Wireless phone charger"]
  },
  {
    id: "mercedes-c-class",
    make: "Mercedes-Benz",
    model: "C-Class",
    type: "Sedan",
    year: 2021,
    price: 46500,
    mileage: "22k mi",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "2.0L Turbo",
    color: "Obsidian Black",
    seats: 5,
    image: "assets/images/vehicle-luxury-sedan.jpg",
    gallery: [
      "assets/images/vehicle-luxury-sedan.jpg",
      "assets/images/hero-luxury-car.jpg",
      "assets/images/showroom-car.jpg"
    ],
    description: "Executive sedan with premium materials, smooth ride quality, and elegant design.",
    features: ["Ambient lighting", "Burmester audio", "Navigation", "Heated seats"]
  },
  {
    id: "ford-mustang",
    make: "Ford",
    model: "Mustang GT",
    type: "Coupe",
    year: 2020,
    price: 48900,
    mileage: "16k mi",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "5.0L V8",
    color: "Race Red",
    seats: 4,
    image: "assets/images/vehicle-muscle.jpg",
    gallery: [
      "assets/images/vehicle-muscle.jpg",
      "assets/images/hero-sports-car.jpg",
      "assets/images/vehicle-coupe.jpg"
    ],
    description: "Strong performance car with a bold road presence and powerful V8 character.",
    features: ["Track mode", "Sport exhaust", "Ventilated seats", "Performance brakes"]
  },
  {
    id: "porsche-cayman",
    make: "Porsche",
    model: "718 Cayman",
    type: "Coupe",
    year: 2021,
    price: 49850,
    mileage: "19k mi",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "2.0L Turbo",
    color: "Carrara White",
    seats: 2,
    image: "assets/images/vehicle-coupe.jpg",
    gallery: [
      "assets/images/vehicle-coupe.jpg",
      "assets/images/vehicle-muscle.jpg",
      "assets/images/showroom-car.jpg"
    ],
    description: "Driver-focused sports coupe with sharp handling and a premium cabin.",
    features: ["Sport Chrono", "PDK gearbox", "Bose audio", "Sport seats"]
  }
];

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});
