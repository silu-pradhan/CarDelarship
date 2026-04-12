const params = new URLSearchParams(window.location.search);
const selectedId = params.get("id");
const selectedVehicle = vehicles.find((vehicle) => vehicle.id === selectedId) || vehicles[0];

const detailsMainImage = document.querySelector("#detailsMainImage");
const detailsThumbs = document.querySelector("#detailsThumbs");
const detailsType = document.querySelector("#detailsType");
const detailsTitle = document.querySelector("#detailsTitle");
const detailsPrice = document.querySelector("#detailsPrice");
const detailsDescription = document.querySelector("#detailsDescription");
const detailsSpecs = document.querySelector("#detailsSpecs");
const detailsFeatures = document.querySelector("#detailsFeatures");

function renderDetailsPage(vehicle) {
  detailsMainImage.src = vehicle.image;
  detailsMainImage.alt = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
  detailsType.textContent = vehicle.type;
  detailsTitle.textContent = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
  detailsPrice.textContent = money.format(vehicle.price);
  detailsDescription.textContent = vehicle.description;

  detailsThumbs.innerHTML = vehicle.gallery.map((image, index) => `
    <button class="thumb-button ${index === 0 ? "active" : ""}" type="button" data-image="${image}">
      <img src="${image}" alt="${vehicle.make} ${vehicle.model} image ${index + 1}">
    </button>
  `).join("");

  detailsSpecs.innerHTML = `
    <div><dt>Make</dt><dd>${vehicle.make}</dd></div>
    <div><dt>Model</dt><dd>${vehicle.model}</dd></div>
    <div><dt>Year</dt><dd>${vehicle.year}</dd></div>
    <div><dt>Price</dt><dd>${money.format(vehicle.price)}</dd></div>
    <div><dt>Mileage</dt><dd>${vehicle.mileage}</dd></div>
    <div><dt>Fuel</dt><dd>${vehicle.fuel}</dd></div>
    <div><dt>Transmission</dt><dd>${vehicle.transmission}</dd></div>
    <div><dt>Engine</dt><dd>${vehicle.engine}</dd></div>
    <div><dt>Color</dt><dd>${vehicle.color}</dd></div>
    <div><dt>Seats</dt><dd>${vehicle.seats}</dd></div>
  `;

  detailsFeatures.innerHTML = vehicle.features.map((feature) => `<span>${feature}</span>`).join("");
}

detailsThumbs.addEventListener("click", (event) => {
  const button = event.target.closest(".thumb-button");

  if (!button) {
    return;
  }

  detailsMainImage.src = button.dataset.image;
  document.querySelectorAll(".thumb-button").forEach((thumb) => thumb.classList.remove("active"));
  button.classList.add("active");
});

renderDetailsPage(selectedVehicle);
