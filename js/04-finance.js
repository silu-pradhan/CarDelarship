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

function setupFinanceForm() {
  financeForm.addEventListener("submit", calculatePayment);
}
