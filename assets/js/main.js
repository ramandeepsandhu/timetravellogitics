const models = {
    acura: ["ILX", "MDX", "NSX", "RDX", "RLX", "TLX"],
    audi: ["A3", "A4", "A5", "A6", "A7", "A8", "e-tron", "e-tron GT", "Q3", "Q5", "Q7", "Q8", "R8", "RS3", "RS5", "RS6", "RS7", "S3", "S4", "S5", "S6", "S7", "S8", "TT", "TTS"],
    bmw: ["2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "i3", "i4", "i8", "iX", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4"],
    buick: ["Enclave", "Encore", "Encore GX", "Envision", "Regal"],
    cadillac: ["ATS", "CT4", "CT5", "CT6", "Escalade", "Escalade ESV", "XT4", "XT5", "XT6"],
    chevrolet: ["Blazer", "Bolt EV", "Camaro", "Colorado", "Corvette", "Cruze", "Equinox", "Express", "Impala", "Malibu", "Silverado 1500", "Silverado 2500HD", "Silverado 3500HD", "Sonic", "Spark", "Suburban", "Tahoe", "Traverse", "Trax", "Volt"],
    chrysler: ["300", "Pacifica", "Voyager"],
    dodge: ["Challenger", "Charger", "Durango", "Grand Caravan", "Journey"],
    ford: ["Bronco", "Bronco Sport", "EcoSport", "Edge", "Escape", "Expedition", "Explorer", "F-150", "F-250 Super Duty", "F-350 Super Duty", "F-450 Super Duty", "Fiesta", "Flex", "Fusion", "Mach-E", "Maverick", "Mustang", "Ranger", "Taurus", "Transit", "Transit Connect"],
    genesis: ["G70", "G80", "G90"],
    gmc: ["Acadia", "Canyon", "Savana", "Sierra 1500", "Sierra 2500HD", "Sierra 3500HD", "Terrain", "Yukon", "Yukon XL"],
    honda: ["Accord", "Civic", "Clarity", "CR-V", "Fit", "HR-V", "Insight", "Odyssey", "Passport", "Pilot", "Ridgeline"],
    hyundai: ["Accent", "Elantra", "Ioniq", "Ioniq 5", "Kona", "Nexo", "Palisade", "Santa Fe", "Sonata", "Tucson", "Veloster", "Venue"],
    infiniti: ["Q50", "Q60", "Q70", "QX30", "QX50", "QX55", "QX60", "QX80"],
    jaguar: ["E-PACE", "F-PACE", "F-TYPE", "I-PACE", "XE", "XF"],
    jeep: ["Cherokee", "Compass", "Gladiator", "Grand Cherokee", "Grand Wagoneer", "Renegade", "Wagoneer", "Wrangler"],
    kia: ["Cadenza", "EV6", "EV9", "Forte", "K5", "K900", "Niro", "Optima", "Rio", "Sedona", "Seltos", "Sorento", "Soul", "Sportage", "Stinger", "Telluride"],
    "land-rover": ["Defender", "Discovery", "Discovery Sport", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar"],
    lexus: ["CT", "ES", "GS", "GX", "IS", "LC", "LS", "LX", "NX", "RC", "RX", "UX"],
    lincoln: ["Aviator", "Continental", "Corsair", "MKC", "MKT", "MKX", "MKZ", "Nautilus", "Navigator", "Navigator L"],
    mazda: ["CX-3", "CX-30", "CX-5", "CX-9", "Mazda3", "Mazda6", "MX-5 Miata"],
    "mercedes-benz": ["A-Class", "C-Class", "CLA-Class", "CLS-Class", "E-Class", "EQC", "EQS", "G-Class", "GLA-Class", "GLB-Class", "GLC-Class", "GLE-Class", "GLS-Class", "Metris", "S-Class", "SL-Class", "SLC-Class", "Sprinter"],
    mitsubishi: ["Eclipse Cross", "Mirage", "Mirage G4", "Outlander", "Outlander PHEV", "Outlander Sport"],
    nissan: ["370Z", "Altima", "Armada", "Frontier", "GT-R", "Kicks", "Leaf", "Maxima", "Murano", "NV Cargo", "NV Passenger", "Pathfinder", "Rogue", "Sentra", "Titan", "Titan XD", "Versa"],
    porsche: ["718 Boxster", "718 Cayman", "911", "Cayenne", "Macan", "Panamera", "Taycan"],
    ram: ["1500", "2500", "3500", "ProMaster", "ProMaster City"],
    rivian: ["R1S", "R1T"],
    subaru: ["Ascent", "BRZ", "Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "WRX"],
    tesla: ["Cybertruck", "Model 3", "Model S", "Model X", "Model Y"],
    toyota: ["4Runner", "Avalon", "Camry", "C-HR", "Corolla", "GR86", "Highlander", "Land Cruiser", "Mirai", "Prius", "RAV4", "Sequoia", "Sienna", "Supra", "Tacoma", "Tundra", "Venza", "Yaris"],
    volkswagen: ["Arteon", "Atlas", "Beetle", "Golf", "Golf GTI", "Golf R", "ID.4", 'Jetta', 'Passat', 'Tiguan', "Touareg"],
    volvo: ['S60', 'S90', "V60", 'XC40', 'XC60', "XC90"]
}

const xl = { 
   "chevrolet" : ["suburban", "tahoe", "silverado-1500", "silverado-2500HD", "silverado-3500HD", "colorado", "express"],
   "gmc" : ["yukon-xl", "yukon", "sierra-1500", "sierra-2500HD", "sierra-3500HD", "canyon", "savana"],
   "ford" : ["expedition-max", "expedition", "f-150", "f-250-super-duty", "f-350-super-duty", "f-450-super-duty", "ranger", "maverick", "transit", "transit-connect"],
   "ram" : ["1500", "2500", "3500", "promaster", "promaster-city"],
   "cadillac" : ["escalade-esv", "escalade"],
   "lincoln" : ["navigator-l", "navigator"],
   "toyota" : ["sequoia", "land-cruiser", "tundra", "tacoma"],
   "nissan" : ["armada", "titan", "titan-xd", "frontier", "nv-cargo", "nv-passenger"],
   "infiniti" : ["qx80"],
   "mercedes-benz" : ["gls-class", "sprinter", "metris"],
   "lexus" : ["lx"],
   "land-rover" : ["range-rover"],
   "honda" : ["ridgeline"],
   "jeep" : ["gladiator"]
}

function updateModelDropdown(obj) {
    var index = jQuery(obj).attr('data-index');
    const makeDropdown = document.getElementById('makeDropdown_'+index);
    const modelDropdown = document.getElementById('modelDropdown_'+index);
    const selectedMake = makeDropdown.value;

    // Clear previous options
    modelDropdown.innerHTML = '<option value="">--Select Model--</option>';

    if (selectedMake) {
        // Populate models based on the selected make
        models[selectedMake].forEach(model => {
            const option = document.createElement('option');
            option.value = model.toLowerCase().replace(/\s+/g, '-'); // Convert model name to a value
            option.textContent = model;
            modelDropdown.appendChild(option);
        });
    }
}

document.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the selected values from the form
    let origin = document.getElementById("state1").value;
    let destination = document.getElementById("state2").value;
    const distanceResult = document.getElementById("distance-result").innerText;
    
    // Save the values to localStorage
    localStorage.setItem("origin", origin);
    localStorage.setItem("destination", destination);
    localStorage.setItem("distanceResult", distanceResult);

    gotoMultiStepForm(); // Assuming you want to redirect after form submission
});

async function gotoMultiStepForm() {
    try {
        console.log("Redirecting to multi-step form...");
        window.location.href = "multi-step-form.html";
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let origin = localStorage.getItem("origin");
    let destination = localStorage.getItem("destination");
    let distanceResult = localStorage.getItem("distanceResult");
    
    console.log("OnLoad");
    console.log(origin);
    console.log(destination);

    if (origin) {
        document.getElementById("state1").value = origin;
        //document.getElementById("address1").value = origin;
    }

    if (destination) {
        document.getElementById("state2").value = destination;
        //document.getElementById("address2").value = destination;
    }
    if (distanceResult) {
        document.getElementById("distance-result").innerText = distanceResult;
        //document.getElementById("distance").value = distanceResult;
    }
});

function handleCheckout(event) {
    event.preventDefault();

    let iframe = document.getElementById("hidden_iframe");
    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.name = "hidden_iframe";
        iframe.id = "hidden_iframe";
        iframe.style.display = "none";
        document.body.appendChild(iframe);
    }

    const form = document.getElementById("multiStepForm");
    form.target = "hidden_iframe";

    iframe.onload = function () {
        window.location.href = "Checkout.html";
    };

    form.submit();
}

function updateLocalStorage() {
    let transportType = document.getElementById("transport-type").value;
    let quantity = document.getElementById("quantity").value;
    let origin = document.getElementById("state1").value;
    let destination = document.getElementById("state2").value;
    let distanceResult = document.getElementById("distance-result").innerText;

    localStorage.setItem("transportType", transportType);
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("origin", origin);
    localStorage.setItem("destination", destination);
    localStorage.setItem("distanceResult", distanceResult);

    localStorage.removeItem("paymentAmount");
}

function setDateinLocalStorage() {
    let pickupdate = document.getElementById("pickup-date").value;
    let deliverydate = document.getElementById("delivery-date").value;
    localStorage.setItem("pickupdate", pickupdate);
    localStorage.setItem("deliverydate", deliverydate);
}

function nextStep(step) {
    document.querySelectorAll(".step").forEach((stepDiv) => {
        stepDiv.style.display = "none";
    });
    document.getElementById("step" + step).style.display = "block";
}

function removeStorage() {
    localStorage.removeItem("paymentDetails");
}

function gotPaymentDetails() {
    window.location.href = 'payment.html';
}

function gotoNext2Page() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let origin = document.getElementById("state1").value;
    let destination = document.getElementById("state2").value;
    let quantity = document.getElementById("quantity").value;

    if (!destination || !origin || !quantity || !name || !phone || !email) {
        return alert('Please fill up the required fields!');
    }
    calculateDistance();
    calculateTotal();
    nextStep(2);
}

function gotoNext3Page(){
    var validated = true;
    jQuery("#step2").find('.required').removeClass('error-required');
    
    jQuery( "#step2 .required" ).each(function( index, element ) {
        if( jQuery(element).val() == ''){
            jQuery(element).addClass('error-required');
            validated = false;
        }
    });
    
    if(validated)
        nextStep(3);    
}


const shippingOptions = document.querySelectorAll(".shipping-option");
const enclosedTransport = document.getElementById("enclosed-transport");
const totalPayment = document.getElementById("total-payment");
const totalCostElement = document.getElementById("total-cost");
const ExpredetCostElement = document.getElementById("expedate-cost");

let totalDistance = parseFloat(localStorage.getItem("distanceResult"));

document.addEventListener("DOMContentLoaded", () => {
    shippingOptions.forEach((option) => {
        option.addEventListener("click", () => {
            shippingOptions.forEach((opt) => opt.classList.remove("selected"));
            option.classList.add("selected");
            ExpredetCostElement.textContent = option.dataset.price;
            updateLocalStorage();
            calculateTotal();
        });
    });
    if(enclosedTransport != null){
        enclosedTransport.addEventListener("change", () => {
            updateLocalStorage();
            calculateTotal();
        });
    }
});


const transportTypeElement = document.getElementById("transport-type-cost");
const vehicleQtyElement = document.getElementById("vehicle-qty");
const vehicleTypeCostElement = document.getElementById("vehicle-type-cost");

const quoteContainer = document.getElementById("quote-container");
const noQuoteContainer = document.getElementById("no-quote-container");
const costPerVehicleElement =  document.getElementById("cost-per-vehicle");

function calculateTotal() {
    var totalQuantity = jQuery("#quantity").val();
    let baseRate = 0;
    let vehicleTypeAdjustment = 0;
    let selectedShippingPrice = parseFloat(ExpredetCostElement.textContent) || 0;

    jQuery( "#main-container .clone-div" ).each(function( index, vehicleObj ) {
        vehicleMake     =  jQuery('#makeDropdown_' + index).val();
        vehicleModel    =  jQuery('#modelDropdown_' + index).val();

        if( typeof xl[vehicleMake] !== 'undefined' ){
            if(xl[vehicleMake].includes(vehicleModel)){
                 vehicleTypeAdjustment +=  100;
            }
        }
    });

    localStorage.setItem("vehicleTypeAdjustment", vehicleTypeAdjustment);

    if (totalDistance) {
        if (totalDistance <= 300) {
            baseRate = totalDistance * 1.75;
        } else if (totalDistance <= 500) {
            baseRate = totalDistance * 1.50;
        } else if (totalDistance <= 999) {
            baseRate = totalDistance * 1.25;
        }
        totalCostElement.textContent = baseRate.toFixed(2);
    }

    const transportTypeAdjustment = enclosedTransport.checked ? parseFloat(enclosedTransport.dataset.price) : 0;
    const totalCost = baseRate  + transportTypeAdjustment;
    const totalPaymentAmount = ( (totalCost + selectedShippingPrice) * totalQuantity) + vehicleTypeAdjustment;

    if (totalPaymentAmount) {
        totalPayment.textContent = totalPaymentAmount.toFixed(2);
    } else {
        totalPayment.textContent = "0.00";
    }

    transportTypeElement.textContent = transportTypeAdjustment.toFixed(2);
    vehicleQtyElement.textContent = totalQuantity;
    vehicleTypeCostElement.textContent = vehicleTypeAdjustment.toFixed(2);

    if(baseRate > 0){
        quoteContainer.style.display = "block";
        noQuoteContainer.style.display = "none";
    }else{
        quoteContainer.style.display = "none";
        noQuoteContainer.style.display = "block";
    }

    if(totalQuantity > 0){
        costPerVehicleElement.textContent = (totalPaymentAmount/totalQuantity).toFixed(2);
    }

    console.log("Total Distance:", totalDistance);
    console.log("Total Quantity:", totalQuantity);
    console.log("Base Rate:", baseRate);
    console.log("Vehicle Type Adjustment:", vehicleTypeAdjustment);
    console.log("Transport Type Adjustment:", transportTypeAdjustment);
    console.log("Selected Shipping Price:", selectedShippingPrice);
    console.log("Total Cost:", totalCost);
    console.log("Total Payment Amount:", totalPaymentAmount);
}
