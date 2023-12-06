var currentYearElement = document.getElementById('currentYear');
currentYearElement.innerHTML = new Date().getFullYear();

function showAlert() {
    alert('When Harry Met Sally is my current favorite movie!');
}

var alertButton = document.getElementById('btn-alert');

alertButton.addEventListener('click', showAlert);