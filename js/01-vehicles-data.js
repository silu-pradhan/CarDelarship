const vehicles = [
  {
    make: "Honda",
    model: "Accord Touring",
    type: "Sedan",
    year: 2023,
    price: 28500,
    mileage: "18k mi",
    fuel: "Hybrid",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
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
    image: "https://images.unsplash.com/photo-1617814076668-8dfc6fe9ecfc?auto=format&fit=crop&w=1000&q=80",
    description: "Executive sedan with premium materials, smooth ride quality, and elegant design."
  }
];

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});
