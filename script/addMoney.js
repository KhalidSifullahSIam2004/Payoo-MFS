document.getElementById('add-money-submit-btn').addEventListener('click', function(){
    const selectedBank = getValueFromInput('add-money-bank');
    if(selectedBank === "Select Bank") {
        alert("Please select a bank.");
        return;
    }

    const bankAccount = getValueFromInput('bank-account-number');
    if(bankAccount.length !== 11) {
        alert("Bank account number must be 11 digits.");
        return;
    }


    const addMoneyAmount = getValueFromInput('add-money-amount');
    const newBalance = getBalance() + Number(addMoneyAmount);

    
    
    const pin = getValueFromInput('add-money-pin');
    if(pin === '1234') {
        alert(`Add money success from 
            ${selectedBank} 
            at ${new Date()}`);
        setCurrentBalance(newBalance);  
    }
    else{
        alert("Invalid PIN. Please try again.");
        return;
    }


})
















// document.getElementById('add-money-btn').addEventListener('click', function() {
//     const accountNumber = document.getElementById('bank-account-number').value;
//     const amount = document.getElementById('add-money-amount').value;
//     const pin = document.getElementById('add-money-pin').value;

//     if (!accountNumber || !amount || !pin) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     if (accountNumber.length !== 11) {
//         alert("Account number must be 11 digits.");
//         return;
//     }

//     if (pin.length !== 4) {
//         alert("Pin must be 4 digits.");
//         return;
//     }

//     // Simulate adding money
//     const currentBalance = parseFloat(document.getElementById('current-balance').textContent);
//     document.getElementById('current-balance').textContent = currentBalance + parseFloat(amount);

//     alert(`Successfully added $${amount} to your account.`);
// });
