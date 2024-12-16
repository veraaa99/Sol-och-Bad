// Varukorgsfunktion
let shoppingCart = document.querySelector('#cart')
let heartButtons = document.querySelectorAll('svg')

const testText = document.createElement("p")
testText.innerText = "This is a paragraph";
document.body.appendChild(testText);
testText.style.display = "none"

heartButtons.forEach(heart => {
    heart.addEventListener('click', () => {
        if (heart.querySelector('path').getAttribute("fill") === "black") {
            heart.querySelector('path').setAttribute("fill", "red")
            testText.style.display = "block"
        } else {
            heart.querySelector('path').setAttribute("fill", "black")
    }
})
})

// Bokningsfunktion

// Formulär på frågesidan

// FAQ (klicka på knapp så man ser svaret på frågan)

// Prenumerera på nyhetsbrev



// Filtrera

// Lämna och skapa recensioner


// Favoriter

// Modal popup 