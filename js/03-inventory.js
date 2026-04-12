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

function setupInventoryFilters() {
  [searchInput, typeFilter, priceFilter].forEach((field) => {
    field.addEventListener("input", renderVehicles);
  });
}
