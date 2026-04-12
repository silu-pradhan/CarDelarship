const vehicles = [
  {
    make: "Honda",
    model: "Accord Touring",
    type: "Sedan",
    year: 2023,
    price: 28500,
    mileage: "18k mi",
    fuel: "Hybrid",
    image: "assets/images/vehicle-sedan.jpg",
    description: "Balanced comfort, strong fuel economy, and a quiet cabin for daily driving."
  },
  {
    make: "Toyota",
    model: "RAV4 XLE",
    type: "SUV",
    year: 2022,
    price: 31900,
    mileage: "24k mi",
    fuel: "Petrol",
    image: "assets/images/vehicle-suv.jpg",
    description: "Practical SUV with generous cargo space and a dependable service record."
  },
  {
    make: "Tesla",
    model: "Model 3",
    type: "Electric",
    year: 2023,
    price: 38900,
    mileage: "14k mi",
    fuel: "Electric",
    image: "assets/images/vehicle-electric.jpg",
    description: "Clean electric performance with modern driver assistance and fast charging."
  },
  {
    make: "BMW",
    model: "X3 xDrive",
    type: "SUV",
    year: 2021,
    price: 42750,
    mileage: "31k mi",
    fuel: "Petrol",
    image: "assets/images/vehicle-suv.jpg",
    description: "Premium compact SUV with confident handling and a refined interior."
  },
  {
    make: "Hyundai",
    model: "i20 Sportz",
    type: "Hatchback",
    year: 2022,
    price: 18950,
    mileage: "20k mi",
    fuel: "Petrol",
    image: "assets/images/vehicle-coupe.jpg",
    description: "Efficient city car with smart features, easy parking, and low running cost."
  },
  {
    make: "Mercedes-Benz",
    model: "C-Class",
    type: "Sedan",
    year: 2021,
    price: 46500,
    mileage: "22k mi",
    fuel: "Petrol",
    image: "assets/images/vehicle-sedan.jpg",
    description: "Executive sedan with premium materials, smooth ride quality, and elegant design."
  }
];

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});
