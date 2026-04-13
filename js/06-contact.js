function setupContactForm() {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const vehicle = formData.get("vehicle");
    const message = formData.get("message");
    
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AVehicle Interest: ${vehicle}%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:santanupradhan599@gmail.com?subject=Test Drive Request&body=${body}`;
    
    contactForm.reset();
    formNote.textContent = "";
    alert("Message sent successfully!");
  });
}
