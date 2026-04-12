function vehicleCard(vehicle) {
  return `
    <article class="vehicle-card" data-car-id="${vehicle.id}" tabindex="0">
      <div class="vehicle-image-wrap">
        <img src="${vehicle.image}" alt="${vehicle.year} ${vehicle.make} ${vehicle.model}">
        <span class="vehicle-badge">${vehicle.type}</span>
      </div>
      <div class="vehicle-body">
        <div class="vehicle-top">
          <div>
            <h3>${vehicle.year} ${vehicle.make} ${vehicle.model}</h3>
            <p>${vehicle.color}</p>
          </div>
          <span class="price">${money.format(vehicle.price)}</span>
        </div>
        <ul class="vehicle-meta">
          <li>${vehicle.mileage}</li>
          <li>${vehicle.fuel}</li>
          <li>${vehicle.transmission}</li>
        </ul>
        <p>${vehicle.description}</p>
        <div class="card-actions">
          <button class="button primary" type="button" data-car-id="${vehicle.id}">View Details</button>
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
    const searchText = `${vehicle.make} ${vehicle.model} ${vehicle.type} ${vehicle.fuel}`.toLowerCase();
    const matchesSearch = !query || searchText.includes(query);
    const matchesType = selectedType === "all" || vehicle.type === selectedType;
    const matchesPrice = selectedPrice === "all" || vehicle.price <= Number(selectedPrice);

    return matchesSearch && matchesType && matchesPrice;
  });

  inventoryGrid.innerHTML = filtered.map(vehicleCard).join("");
  emptyState.hidden = filtered.length > 0;
}

function openCarDetails(carId) {
  const vehicle = vehicles.find((car) => car.id === carId);

  if (!vehicle) {
    return;
  }

  modalImage.src = vehicle.image;
  modalImage.alt = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
  modalType.textContent = vehicle.type;
  modalTitle.textContent = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
  modalPrice.textContent = money.format(vehicle.price);
  modalDescription.textContent = vehicle.description;
  modalSpecs.innerHTML = `
    <div><dt>Mileage</dt><dd>${vehicle.mileage}</dd></div>
    <div><dt>Fuel</dt><dd>${vehicle.fuel}</dd></div>
    <div><dt>Transmission</dt><dd>${vehicle.transmission}</dd></div>
    <div><dt>Engine</dt><dd>${vehicle.engine}</dd></div>
    <div><dt>Color</dt><dd>${vehicle.color}</dd></div>
    <div><dt>Seats</dt><dd>${vehicle.seats}</dd></div>
  `;
  modalFeatures.innerHTML = vehicle.features.map((feature) => `<span>${feature}</span>`).join("");

  carModal.classList.add("open");
  carModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCarDetails() {
  carModal.classList.remove("open");
  carModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setupInventoryFilters() {
  [searchInput, typeFilter, priceFilter].forEach((field) => {
    field.addEventListener("input", renderVehicles);
  });
}

function setupCarDetails() {
  inventoryGrid.addEventListener("click", (event) => {
    const estimateLink = event.target.closest('a[href="#finance"]');
    const card = event.target.closest("[data-car-id]");

    if (estimateLink || !card) {
      return;
    }

    openCarDetails(card.dataset.carId);
  });

  inventoryGrid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }

    const card = event.target.closest(".vehicle-card");
    if (card) {
      openCarDetails(card.dataset.carId);
    }
  });

  carModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-modal]")) {
      closeCarDetails();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && carModal.classList.contains("open")) {
      closeCarDetails();
    }
  });
}
