// Shopping cart feature
// Variables for shopping cart and list of all heart buttons (add to cart-buttons)
let shoppingCart = document.querySelector('#cart')
let heartButtonsImage = document.querySelectorAll('svg')
let heartButtonsList = Object.values(heartButtonsImage);

// Placeholder text for notification function
const testText = document.createElement("p")
testText.innerText = "This is a paragraph";
document.body.appendChild(testText);
testText.style.display = "none"

function checkSavedTrips(heart){
    return heart.querySelector('path').getAttribute("fill") === "black"
}

function showOrHideNotification() {
    if(heartButtonsList.every(checkSavedTrips)){
        testText.style.display = "none"
        return false
    } else {
        testText.style.display = "block"
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
    if (formBtn) {
        formBtn.addEventListener('click', () => displayThanks(document));
    };
  
  module.exports = {displayThanks};
  

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
    if (subscribeBtn) {
      subscribeBtn.addEventListener('click', () => displaySubscribed(document));
    };
  
  module.exports = {displaySubscribed}; 


// Filtrera

// Lämna och skapa recensioner


// Favoriter

// Modal popup 