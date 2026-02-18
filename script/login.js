document.getElementById("login-btn").addEventListener('click', function() {
    const number = getValueFromInput('input-number');
    const pin = getValueFromInput('input-pin');

    if(number.length == 11 && pin == '1234') {
        alert("Login successful!");
        window.location.assign('home.html')
    } else {
        alert("Invalid mobile number or PIN.");
    }
});