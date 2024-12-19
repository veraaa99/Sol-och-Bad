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
    if (formBtn) {
        formBtn.addEventListener('click', (e) => {
            e.preventDefault();
            displayThanks(document);
        })
    };
  

// FAQ (klicka på knapp så man ser svaret på frågan)

// Prenumerera på nyhetsbrev
const subscribeSec = document.getElementById('subscribed');
let subscribedText;
let sent = false;

function displaySubscribed() {
  if (subscribeSec) {
    subscribedText = document.createElement('p');
    subscribedText.setAttribute('class', 'subscribe-text py-1 m-0');
    subscribedText.setAttribute('id', 'subscribedMsg');
    subscribedText.innerText = "Välkommen! Du blir först med att ta del av nya och spännande erbjudanden.";
    subscribeSec.appendChild(subscribedText);
    sent = true;
  }
}

function setupButtonListener() {
  const subscribeBtn = document.getElementById('subscribeBtn');
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!sent) {
        sent = true;
        displaySubscribed();
      }
    });
  }
}

setupButtonListener()

function getSent() {
  return sent; // Return the current value of sent
}

module.exports = { setupButtonListener, getSent };


// Filtrera

// Lämna och skapa recensioner


// Favoriter

// Modal popup 
const bookingBtn = document.querySelector('#bookingBtn');
bookingBtn.addEventListener('click', bookingForm)

function bookingForm() {
    const modal = new bootstrap.Modal(document.getElementById('myModal'));
    modal.show();
}