document.getElementById('withdraw-btn').addEventListener('click', function() {
    const agentNumber = getValueFromInput('agent-number');
    const amount = getValueFromInput('input-amount');
    const pin = getValueFromInput('input-pin');
    

    const newBalance = getBalance() - Number(amount);

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
        setCurrentBalance(newBalance);
    }
});