
  const shippingOptions = document.querySelectorAll(".shipping-option");
  const enclosedTransport = document.getElementById("enclosed-transport");
  const totalPayment = document.getElementById("total-payment");
  const totalCostElement = document.getElementById("total-cost");
  const ExpredetCostElement = document.getElementById("expedate-cost");
  const vehicleTypeElement = document.getElementById("vehicle-type");

  const totalDistance = parseFloat(localStorage.getItem("distanceResult"));
  const totalQuantity = parseFloat(localStorage.getItem("quantity"));
  const vehicleType = localStorage.getItem("vehicleType");

  vehicleTypeElement.textContent = vehicleType ? "100.00" : "0.00";

  let baseRate = 0;
  let vehicleTypeAdjustment = vehicleType ? 100 : 0;

  if (totalDistance <= 300) {
      baseRate = totalDistance * 1.75;
  } else if (totalDistance <= 500) {
      baseRate = totalDistance * 1.50;
  } else if (totalDistance <= 999) {
      baseRate = totalDistance * 1.25;
  } 

  totalCostElement.textContent = baseRate.toFixed(2);
  
  let selectedShippingPrice = 0;

  shippingOptions.forEach((option) => {
      option.addEventListener("click", () => {
          shippingOptions.forEach((opt) => opt.classList.remove("selected"));
          option.classList.add("selected");
          selectedShippingPrice = parseFloat(option.dataset.price);
          ExpredetCostElement.textContent = selectedShippingPrice
          calculateTotal();
      });
  });

  enclosedTransport.addEventListener("change", calculateTotal);

  
  function calculateTotal() {
      let transportTypeAdjustment = enclosedTransport.checked ? parseFloat(enclosedTransport.dataset.price) : 0;
      let totalCost = (baseRate + vehicleTypeAdjustment + transportTypeAdjustment);
       
      let totalPaymentAmount = (totalCost + selectedShippingPrice) * totalQuantity;
      totalPayment.textContent = `${totalPaymentAmount.toFixed(2)}`;
  }

  calculateTotal();
