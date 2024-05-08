function calculateInterest() {
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value);
  const loanTerm = parseInt(document.getElementById('loanTerm').value);
  const downPayment = parseFloat(document.getElementById('downPayment').value);

  const totalLoanAmount = loanAmount - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPayments = loanTerm * 12;

  const monthlyPayment = (totalLoanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
  const totalInterest = (monthlyPayment * totalPayments) - totalLoanAmount;

  const result = document.getElementById('result');
  result.innerHTML = `
    <h2>Interest Calculation Result</h2>
    <p>Total Loan Amount: $${totalLoanAmount.toFixed(2)}</p>
    <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
    <p>Total Interest Paid: $${totalInterest.toFixed(2)}</p>
  `;
}