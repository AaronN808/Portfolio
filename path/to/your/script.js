var currentYearElement = document.getElementById('currentYear');
currentYearElement.innerHTML = new Date().getFullYear();

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