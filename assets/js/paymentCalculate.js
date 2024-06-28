function calculatePayment() {
    // Retrieve quantity and distance from input fields
    let quantity = parseFloat(document.getElementById("quantity").value);
    let distance = parseFloat(localStorage.getItem("distanceResult"));
    let vehicleType = localStorage.getItem("vehicleType");
    let transportType = localStorage.getItem("transportType");
    
    // console.log('Retrieved values:');
    // console.log('vehicleType:', vehicleType);
    // console.log('transportType:', transportType);
    
    // Retrieve date strings from localStorage
    let deliverydateStr = localStorage.getItem("deliverydate");
    let pickupdateStr = localStorage.getItem("pickupdate");
    
    // Convert strings to Date objects
    let deliverydate = new Date(deliverydateStr);
    let pickupdate = new Date(pickupdateStr);
    
       // Get today's date
       let today = new Date();

       // Calculate the difference in time in days between today and pickupdate
       let timeDifferenceToPickup = pickupdate.getTime() - today.getTime();
       let daysDifferenceToPickup = Math.ceil(timeDifferenceToPickup / (1000 * 60 * 60 * 24));
       
      


    // Calculate the difference in time in days
    let timeDifference = deliverydate.getTime() - pickupdate.getTime();
    let daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    

      // Input validation
      if (isNaN(quantity) || isNaN(distance) ||  !transportType) {
        return alert("Please fill in all required fields.");
    }

    // Step 1: Calculate base rate based on distance
    let baseRate;
    if (distance <= 300) {
        baseRate = 1.75; // $1.75 per mile per vehicle
    } else if (distance <= 500) {
        baseRate = 1.50; // $1.50 per mile per vehicle
    } else if (distance <= 999) {
        baseRate = 1.25; // $1.25 per mile per vehicle
    } else {
        // Distance of 1000 miles or more (custom quote)
        return alert("Please call for a quote for distances over 1000 miles.");
    }
    
    // Step 2: Adjust for vehicle type
    // let vehicleTypeAdjustment = 100;
    // if (vehicleType.split('"').join('') === 'Truck') {
    //     vehicleTypeAdjustment = 100;
    // }
    let vehicleTypeAdjustment = 100;
    if (vehicleType.split('"').join('') === '') {
        vehicleTypeAdjustment = 0;
        console.log('vitore acie');
    }

    // Step 3: Adjust for transport type
    let transportTypeAdjustment = 0;
    if (transportType.split('"').join('') === 'enclosed') {
        transportTypeAdjustment = 500; // $500 for enclosed transport
    } else if (transportType.split('"').join('') === 'open') {
        transportTypeAdjustment = 0;
    }
    
   
 // Step 4: Adjust for shipping speed
 let expeditedShippingAdjustment = 0;
 if (daysDifferenceToPickup <= 2 && daysDifference <= 2) {
     expeditedShippingAdjustment = 200; // $200 for expedited shipping
 } else if (daysDifferenceToPickup > 2  && daysDifference <= 7) {
     expeditedShippingAdjustment = 0; // No additional charge within 7 days
 } else {
     return alert("Please call for a quote for exact day shipping.");
 }

    // Calculate payment amount
    let distanceBaseRate = distance * baseRate;
    let paymentAmount = (distanceBaseRate + vehicleTypeAdjustment + transportTypeAdjustment + expeditedShippingAdjustment) * quantity;
    
    console.log('Calculations:');
    console.log('distance:', distance);
    console.log('baseRate:', baseRate);
    console.log('distanceBaseRate:', distanceBaseRate);
    console.log('vehicleTypeAdjustment:', vehicleTypeAdjustment);
    console.log('transportTypeAdjustment:', transportTypeAdjustment);
    console.log('expeditedShippingAdjustment:', expeditedShippingAdjustment);
    console.log('quantity:', quantity);
    console.log('paymentAmount:', paymentAmount);
    console.log('daysDifferenceToPickup',daysDifferenceToPickup);
    // Update the payment amount input field
    document.getElementById("amount").value = paymentAmount.toFixed(2); // Format to two decimal places
    localStorage.setItem("paymentAmount", paymentAmount.toFixed(2));
}
