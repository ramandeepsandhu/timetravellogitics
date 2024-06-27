function calculatePayment() {
    // Retrieve quantity and distance from input fields
    let quantity = parseFloat(document.getElementById("quantity").value);
    let distance = parseFloat(localStorage.getItem("distanceResult")); // Assuming distance is stored in localStorage

    // Calculate payment amount
    let perQuantityPrice = 10;
    let perMilePrice = 0.01;
    let paymentAmount =
      quantity * perQuantityPrice + distance * perMilePrice;

    // Update the payment amount input field
    document.getElementById("amount").value = paymentAmount.toFixed(2); // Format to two decimal places
    localStorage.setItem("paymentAmount", paymentAmount.toFixed(2));
  }