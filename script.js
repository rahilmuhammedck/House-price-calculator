function predictPrice() {
  const location = document.getElementById('location').value;
  const squareFootage = parseFloat(document.getElementById('squareFootage').value);
  const bedrooms = parseInt(document.getElementById('bedrooms').value);
  const bathrooms = parseInt(document.getElementById('bathrooms').value);
  const yearBuilt = parseInt(document.getElementById('yearBuilt').value);
  const carPorch = document.getElementById('carPorch').value;
  const garden = document.getElementById('garden').value;

  // Perform prediction calculation here (dummy calculation)
  let predictedPrice = squareFootage * 8000 + bedrooms * 40000 + bathrooms * 24000 - (2024 - yearBuilt) * 80000;

  // Adjust price based on car porch and garden availability
  if (carPorch === 'yes') {
    predictedPrice += 40000; // Add $ for car porch
  }
  if (garden === 'yes') {
    predictedPrice += 24000; // Add for garden
  }

  // Redirect to result page with predicted price as query parameter
  window.location.href = `result.html?predictedPrice=₹{predictedPrice}`;
}