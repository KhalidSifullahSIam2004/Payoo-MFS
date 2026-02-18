const sendMoneySubmitBtn = document.getElementById('send-money-submit-btn');

if (sendMoneySubmitBtn) {
sendMoneySubmitBtn.addEventListener('click', function() {
    const userAccountNumber = getValueFromInput('user-account-number');
    const sendMoneyAmount = getValueFromInput('send-money-amount');
    const sendMoneyPin = getValueFromInput('send-money-pin');
    const currentBalance = getBalance();

    if(userAccountNumber.length !== 11){
        alert("Invalid account number. Please enter a 11-digit account number.");
        return;
    }

    if(sendMoneyAmount <= 0){
        alert("Invalid amount. Please enter a valid amount greater than 0.");
        return;
    }
    else if(sendMoneyAmount > currentBalance){
        alert("Insufficient balance.");
        return;
    }
 

    if(sendMoneyPin !== '1234'){
        alert("Invalid PIN. Please enter the correct 4-digit PIN.");
        return; 
    }
    else{
         alert("Send Money successful!");
         // Update the balance
         const newBalance = currentBalance - sendMoneyAmount;
         setCurrentBalance(newBalance);
    }
})
}
