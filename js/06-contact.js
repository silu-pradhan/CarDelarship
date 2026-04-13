function setupContactForm() {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const vehicle = formData.get("vehicle");
    const message = formData.get("message");
    
    // Here you can send the data to a backend service
    // For now, we'll just show the success modal
    console.log("Contact form submitted:", { name, email, vehicle, message });
    
    // Show success modal
    const successModal = document.getElementById("successModal");
    successModal.classList.add("open");
    successModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    
    // Reset form
    contactForm.reset();
    formNote.textContent = "";
    
    // Close modal after 4 seconds
    setTimeout(() => {
      closeSuccessModal();
    }, 4000);
  });
  
  // Setup close button listeners
  const closeButtons = document.querySelectorAll("[data-close-success]");
  closeButtons.forEach(button => {
    button.addEventListener("click", closeSuccessModal);
  });
}

function closeSuccessModal() {
  const successModal = document.getElementById("successModal");
  successModal.classList.remove("open");
  successModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
