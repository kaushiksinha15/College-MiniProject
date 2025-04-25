function validateInput(input) {
    if (input.value < 1) {
        input.value = "";
        alert("Please enter a valid details for booking.");
    }
}
function total() {
    var p = parseInt(document.getElementById("people").value) || 0;
    var noroom = parseInt(document.getElementById("numroom").value) || 0;
    var roomType = document.getElementById("room").value;

    var pricePerRoom = {
        "SingleBed": 1000,
        "DoubleBed": 1800,
        "Suite": 3000
    };

    if (noroom > 0 && p > 0) {
        var totalPrice = noroom * pricePerRoom[roomType];
        alert("Booking confirmed! Total price to be paid: " + totalPrice + " RS");
    } 
    else if(noroom==0 || p==0){
        alert("The number of rooms of people cannot be empty");
    }
    else {
        alert("Please enter valid details for booking.");
    }
}
function openModal() {
    document.getElementById("bookingModal").style.display = "block";
}
function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
}
function messagePrompt() {
    var email = document.getElementById("email").value; 

    if (email.trim() == "") { 
        alert("Please enter a valid email ID");
    } else {
        alert("Thank you for subscribing");
    }
}
function Greet() {
    let mealSelection = document.querySelector('input[name="meal"]:checked');
    let restaurantSelection = document.getElementById("restaurant").value;
    let message = document.getElementById("greet");

    if (mealSelection) {
        message.innerHTML = `Thank you! Your booking for <b>${mealSelection.value}</b> at <b>${restaurantSelection}</b> has been confirmed.`;
    } else {
        message.innerHTML = "Please select a meal option before confirming.";
    }
}
