const selectedCompareIds = new Set();

function vehicleCard(vehicle) {
  const isSelected = selectedCompareIds.has(vehicle.id);

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
          <a class="button primary" href="details.html?id=${vehicle.id}">View Details</a>
          <a class="button secondary" href="#finance">Estimate</a>
        </div>
        <button class="compare-toggle ${isSelected ? "selected" : ""}" type="button" data-compare-id="${vehicle.id}">
          ${isSelected ? "Added to Compare" : "Add to Compare"}
        </button>
      </div>
    </article>
  `;
}

function renderVehicles() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = vehicles.filter((vehicle) => {
    const searchText = `${vehicle.make} ${vehicle.model} ${vehicle.year} ${vehicle.price}`.toLowerCase();
    const matchesSearch = !query || searchText.includes(query);

    return matchesSearch;
  });

  inventoryGrid.innerHTML = filtered.map(vehicleCard).join("");
  emptyState.hidden = filtered.length > 0;
}

function openCarDetails(carId) {
  window.location.href = `details.html?id=${carId}`;
}



function toggleCompare(carId) {
  if (selectedCompareIds.has(carId)) {
    selectedCompareIds.delete(carId);
  } else {
    selectedCompareIds.add(carId);
  }

  renderVehicles();
  
  if (selectedCompareIds.size >= 2) {
    openCompareModal();
  }
}

function compareCell(label, values) {
  return `
    <tr>
      <th scope="row">${label}</th>
      ${values.map((value) => `<td>${value}</td>`).join("")}
    </tr>
  `;
}

function renderCompareTable() {
  const selectedCars = vehicles.filter((vehicle) => selectedCompareIds.has(vehicle.id));

  compareTableWrap.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th scope="col">Details</th>
          ${selectedCars.map((vehicle) => `
            <th scope="col">
              <img src="${vehicle.image}" alt="${vehicle.year} ${vehicle.make} ${vehicle.model}">
              <span>${vehicle.year} ${vehicle.make} ${vehicle.model}</span>
            </th>
          `).join("")}
        </tr>
      </thead>
      <tbody>
        ${compareCell("Price", selectedCars.map((vehicle) => money.format(vehicle.price)))}
        ${compareCell("Type", selectedCars.map((vehicle) => vehicle.type))}
        ${compareCell("Mileage", selectedCars.map((vehicle) => vehicle.mileage))}
        ${compareCell("Fuel", selectedCars.map((vehicle) => vehicle.fuel))}
        ${compareCell("Transmission", selectedCars.map((vehicle) => vehicle.transmission))}
        ${compareCell("Engine", selectedCars.map((vehicle) => vehicle.engine))}
        ${compareCell("Color", selectedCars.map((vehicle) => vehicle.color))}
        ${compareCell("Seats", selectedCars.map((vehicle) => vehicle.seats))}
        ${compareCell("Features", selectedCars.map((vehicle) => vehicle.features.join(", ")))}
        ${compareCell("Full Page", selectedCars.map((vehicle) => `<a href="details.html?id=${vehicle.id}">Open details</a>`))}
      </tbody>
    </table>
  `;
}

function openCompareModal() {
  if (selectedCompareIds.size < 2) {
    return;
  }

  renderCompareTable();
  compareModal.classList.add("open");
  compareModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCompareModal() {
  compareModal.classList.remove("open");
  compareModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  clearComparison();
}

function clearComparison() {
  selectedCompareIds.clear();
  renderVehicles();
}

function setupInventoryFilters() {
  searchInput.addEventListener("input", renderVehicles);
}

function setupCarDetails() {
  inventoryGrid.addEventListener("click", (event) => {
    const compareButton = event.target.closest("[data-compare-id]");
    const actionLink = event.target.closest("a");
    const card = event.target.closest("[data-car-id]");

    if (compareButton) {
      toggleCompare(compareButton.dataset.compareId);
      return;
    }

    if (actionLink || !card) {
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
}

function setupComparison() {
  compareModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-compare]")) {
      closeCompareModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && compareModal.classList.contains("open")) {
      closeCompareModal();
    }
  });
}
