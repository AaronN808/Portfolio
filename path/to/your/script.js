var currentYearElement = document.getElementById('currentYear');
currentYearElement.innerHTML = new Date().getFullYear();

// Date Cutoff
function showAlert() {
    alert('When Harry Met Sally is my current favorite movie!');
}

var alertButton = document.getElementById('btn-alert');

alertButton.addEventListener('click', showAlert);

function changeButtonLabel() {
    alertButton.innerText = 'You are currently hovering over the alert button!'
}

function revertButtonLabel() {
    alertButton.innerText = 'Click me for an alert';
}

alertButton.addEventListener('mouseover', changeButtonLabel);
alertButton.addEventListener('mouseleave', revertButtonLabel);

function showAlert() {
    alert('When Harry Met Sally is my current favorite movie!');
}

alertButton.addEventListener('click', showAlert);

// Alert and Hover Button Cutoff

var counterButton = document.getElementById('btn-counter');
var counterParagraph = document.getElementById('txt-counter');

var count = 1;

function incrementCounter() {
    count++;
    counterParagraph.innerHTML = 'Likes: ' + count;

    // Counter Button Cutoff

    if (count % 2 === 0) {
        counterButton.classList.remove('odd');
        counterButton.classList.add('even');
    } else {
        counterButton.classList.remove('even');
        counterButton.classList.add('odd');
    }
}

counterButton.addEventListener('click', incrementCounter);

// Text Color Addition Cutoff

var numbersList = document.getElementById('numbers');

for (let i = 1; i <= 100; i++) {
    var listItem = document.createElement('li');
    
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    
    numbersList.appendChild(listItem);
}

// Ordered List Cutoff