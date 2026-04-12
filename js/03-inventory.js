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
          <a class="button primary" href="details.html?id=${vehicle.id}">View Details</a>
          <a class="button secondary" href="#finance">Estimate</a>
        </div>
      </div>
    </article>
  `;
}

function renderVehicles() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedMake = makeFilter.value;
  const selectedType = typeFilter.value;
  const selectedYear = yearFilter.value;
  const minPrice = Number(minPriceFilter.value) || 0;
  const maxPrice = Number(maxPriceFilter.value) || Infinity;

  const filtered = vehicles.filter((vehicle) => {
    const searchText = `${vehicle.make} ${vehicle.model} ${vehicle.year} ${vehicle.price}`.toLowerCase();
    const matchesSearch = !query || searchText.includes(query);
    const matchesMake = selectedMake === "all" || vehicle.make === selectedMake;
    const matchesType = selectedType === "all" || vehicle.type === selectedType;
    const matchesYear = selectedYear === "all" || vehicle.year === Number(selectedYear);
    const matchesPrice = vehicle.price >= minPrice && vehicle.price <= maxPrice;

    return matchesSearch && matchesMake && matchesType && matchesYear && matchesPrice;
  });

  inventoryGrid.innerHTML = filtered.map(vehicleCard).join("");
  emptyState.hidden = filtered.length > 0;
}

function openCarDetails(carId) {
  window.location.href = `details.html?id=${carId}`;
}

function setupInventoryFilters() {
  [searchInput, makeFilter, typeFilter, yearFilter, minPriceFilter, maxPriceFilter].forEach((field) => {
    field.addEventListener("input", renderVehicles);
  });
}

function setupCarDetails() {
  inventoryGrid.addEventListener("click", (event) => {
    const actionLink = event.target.closest("a");
    const card = event.target.closest("[data-car-id]");

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
