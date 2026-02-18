document.getElementById("login-btn").addEventListener('click', function() {
    const number = document.getElementById("input-number").value;
    const pin = document.getElementById("input-pin").value;

    if(number == '01234567890' && pin == '1234') {
        alert("Login successful!");
        window.location.assign('/home.html')
    } else {
        alert("Invalid mobile number or PIN.");
    }
});