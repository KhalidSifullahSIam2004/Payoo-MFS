document.getElementById('withdraw-btn').addEventListener('click', function() {
    const agentNumber = getValueFromInput('agent-number');
    const amount = getValueFromInput('input-amount');
    const pin = getValueFromInput('input-pin');
    let currentBalance = document.getElementById('current-balance').textContent;

    const newBalance = Number(currentBalance) - Number(amount);

    if(agentNumber.length !== 11) {
        alert("Invalid Agent Number!");
        return;
    }

    if (newBalance < 0) {
        alert("Insufficient balance!");
        return;
    }

    if(pin !== "1234") {
        alert("Invalid PIN!");
        return;
    }
    else{
        alert('Cashout successful!');
        document.getElementById('current-balance').textContent = newBalance;
    }
});