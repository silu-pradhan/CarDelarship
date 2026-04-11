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

const inventoryGrid = document.querySelector("#inventoryGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const typeFilter = document.querySelector("#typeFilter");
const priceFilter = document.querySelector("#priceFilter");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#navLinks");
const financeForm = document.querySelector("#financeForm");
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

function vehicleCard(vehicle) {
  return `
    <article class="vehicle-card">
      <img src="${vehicle.image}" alt="${vehicle.year} ${vehicle.make} ${vehicle.model}">
      <div class="vehicle-body">
        <div class="vehicle-top">
          <div>
            <h3>${vehicle.year} ${vehicle.make} ${vehicle.model}</h3>
            <p>${vehicle.type}</p>
          </div>
          <span class="price">${money.format(vehicle.price)}</span>
        </div>
        <ul class="vehicle-meta">
          <li>${vehicle.mileage}</li>
          <li>${vehicle.fuel}</li>
          <li>Inspected</li>
        </ul>
        <p>${vehicle.description}</p>
        <div class="card-actions">
          <a class="button primary" href="#contact">Book Drive</a>
          <a class="button secondary" href="#finance">Estimate</a>
        </div>
      </div>
    </article>
  `;
}

function renderVehicles() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedType = typeFilter.value;
  const selectedPrice = priceFilter.value;

  const filtered = vehicles.filter((vehicle) => {
    const searchText = `${vehicle.make} ${vehicle.model} ${vehicle.type}`.toLowerCase();
    const matchesSearch = !query || searchText.includes(query);
    const matchesType = selectedType === "all" || vehicle.type === selectedType;
    const matchesPrice = selectedPrice === "all" || vehicle.price <= Number(selectedPrice);

    return matchesSearch && matchesType && matchesPrice;
  });

  inventoryGrid.innerHTML = filtered.map(vehicleCard).join("");
  emptyState.hidden = filtered.length > 0;
}

function calculatePayment(event) {
  event.preventDefault();

  const amount = Number(document.querySelector("#loanAmount").value);
  const downPayment = Number(document.querySelector("#downPayment").value);
  const term = Number(document.querySelector("#loanTerm").value);
  const principal = Math.max(amount - downPayment, 0);
  const annualRate = 0.079;
  const monthlyRate = annualRate / 12;
  const payment = principal * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -term)));

  document.querySelector("#paymentResult").textContent =
    `Estimated monthly payment: ${money.format(payment || 0)}`;
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

[searchInput, typeFilter, priceFilter].forEach((field) => {
  field.addEventListener("input", renderVehicles);
});

financeForm.addEventListener("submit", calculatePayment);

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.reset();
  formNote.textContent = "Thanks. Your test drive request is ready for the showroom team.";
});

renderVehicles();
