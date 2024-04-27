function predictPrice() {
  const location = document.getElementById('location').value;
  const squareFootage = parseFloat(document.getElementById('squareFootage').value);
  const bedrooms = parseInt(document.getElementById('bedrooms').value);
  const bathrooms = parseInt(document.getElementById('bathrooms').value);
  const yearBuilt = parseInt(document.getElementById('yearBuilt').value);

  // Perform prediction calculation here (dummy calculation)
  const predictedPrice = squareFootage * 100 + bedrooms * 5000 + bathrooms * 3000 - (2024 - yearBuilt) * 1000;

  // Redirect to result page with predicted price as query parameter
  window.location.href = `result.html?predictedPrice=${predictedPrice}`;
}