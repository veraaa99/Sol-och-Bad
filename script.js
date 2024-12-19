// Shopping cart feature
// Variables for shopping cart and list of all heart buttons (add to cart-buttons)
let notification = document.getElementsByClassName("prick")
let heartButtonsImage = document.getElementsByClassName('heart')
let heartButtonsList = Object.values(heartButtonsImage);
let isNotificationAvaliable = true
let hasAttributeBeenSet = false

// Checks if a single heart has the color black
function checkSavedTrips(heart){
    return heart.querySelector('path').getAttribute("fill") === "black"
}

// If the notification element does not exist on the page, set isNotificationAvaliable to false
if(notification === null){
    isNotificationAvaliable = false
}

// If isNotificationAvaliable is true, call on showOrHideNotification()
if (isNotificationAvaliable){
    showOrHideNotification()
}

// Shows a notification, if at least one heart on the Packages page is red
function showOrHideNotification() {
    if(heartButtonsList.every(checkSavedTrips)){
        for(var i = 0; i < notification.length; i = i + 1) {
            notification[i].style.display="none";
        }
        return false
    } else {
        for(var i = 0; i < notification.length; i = i + 1) {
            notification[i].style.display="block";
        }
        return true
    }
}

// Changes the color of hearts, if the user clicks on them on the Packages page
function checkHeartButtons() {
    heartButtonsList.forEach(heart => {
        heart.addEventListener('click', () => {
            if (heart.querySelector('path').getAttribute("fill") === "black") {
                heart.querySelector('path').setAttribute("fill", "red")
                hasAttributeBeenSet = true
                showOrHideNotification()
            } else {
                heart.querySelector('path').setAttribute("fill", "black")
                hasAttributeBeenSet = true
                showOrHideNotification()
            }
        })
    })
}

checkHeartButtons()

// Export to test file
module.exports = {checkSavedTrips, showOrHideNotification, heartButtonsList, checkHeartButtons, hasAttributeBeenSet}

// Bokningsfunktion

// Formulär på frågesidan
function displayThanks(document) {
    const messageUs = document.getElementById('messageUs');
    const thanksText = document.createElement('p');
    thanksText.setAttribute('id', 'thankUser');
    thanksText.innerText = "Tack för ditt meddelande, vi hör av oss!";
    messageUs.appendChild(thanksText);
    return true;
  };
  
const formBtn = document.getElementById('formBtn');
//If this button exists on the page, add event listener to that page
    if (formBtn) {
        formBtn.addEventListener('click', () => displayThanks(document));
    };
//Export to test file, testing if a message is display when button is clicked
//   module.exports = {displayThanks};
  

// FAQ (klicka på knapp så man ser svaret på frågan)

// Prenumerera på nyhetsbrev
function displaySubscribed(document) {
    const subscribe = document.getElementById('subscribe');
    const subscribedText = document.createElement('p');
    subscribedText.innerText = "Välkommen! Du blir först med att ta del av nya och spännande erbjudanden.";
    subscribe.appendChild(subscribedText);
    return true;
  };

const subscribeBtn = document.getElementById('subscribeBtn');
//If this button exists on the page, add event listener to that page
    if (subscribeBtn) {
      subscribeBtn.addEventListener('click', () => displaySubscribed(document));
    };
//Export to test file, testing if a message is display when button is clicked
//   module.exports = {displaySubscribed}; 


// Filtrera

// Lämna och skapa recensioner


// Favoriter

// Modal popup 
const bookingBtn = document.querySelector('#bookingBtn');
if(bookingBtn) {
    bookingBtn.addEventListener('click', bookingForm)
}

function bookingForm() {
    const modal = new bootstrap.Modal(document.getElementById('myModal'));
    modal.show();
}