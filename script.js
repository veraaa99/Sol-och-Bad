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
if (document.querySelector('#formBtn')) {
    const formBtn = document.getElementById('formBtn');
    formBtn.addEventListener('click', (e) => {
        e.preventDefault();
        displayThanks();
        })
};

const displayThanks = function() {
    const thanksText = document.createElement("p");
    thanksText.innerText = "Tack för ditt meddelande, vi hör av oss!";
    const messageUs = document.getElementById('messageUs');
    messageUs.appendChild(thanksText);
};

// FAQ (klicka på knapp så man ser svaret på frågan)

// Prenumerera på nyhetsbrev
// if (document.querySelector('#subscribeBtn')) {
//     const formBtn = document.getElementById('subscribeBtn');
//     formBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         displayThanks();
//         })
// };

// const displaySubscribed = function() {
//     const subscribedText = document.createElement("p");
//     subscribedText.innerText = "Välkommen! Du blir först i att ta del av spännande erbjudaden.";
//     const subscribe = document.getElementById('subscribe');
//     subscribe.appendChild(subscribedText);
// };


// Filtrera

// Lämna och skapa recensioner


// Favoriter

// Modal popup 