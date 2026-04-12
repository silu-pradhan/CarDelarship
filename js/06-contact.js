function setupContactForm() {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.reset();
    formNote.textContent = "Thanks. Your test drive request is ready for the showroom team.";
  });
}
