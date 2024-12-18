// Shopping cart feature
// Variables for shopping cart and list of all heart buttons (add to cart-buttons)
let notification = document.getElementsByClassName("prick")
let heartButtonsImage = document.getElementsByClassName('heart')
let heartButtonsList = Object.values(heartButtonsImage);
let isNotificationAvaliable = true

function checkSavedTrips(heart){
    return heart.querySelector('path').getAttribute("fill") === "black"
}

if(notification === null){
    isNotificationAvaliable = false
}

if (isNotificationAvaliable){
    showOrHideNotification()
}

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

heartButtonsList.forEach(heart => {
    heart.addEventListener('click', () => {
        if (heart.querySelector('path').getAttribute("fill") === "black") {
            heart.querySelector('path').setAttribute("fill", "red")
            showOrHideNotification()
        } else {
            heart.querySelector('path').setAttribute("fill", "black")
            showOrHideNotification()
        }
    })
})

// Export to test file
module.exports = {checkSavedTrips, showOrHideNotification, heartButtonsList}

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