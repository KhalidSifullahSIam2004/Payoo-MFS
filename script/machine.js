function getValueFromInput (id){
    console.log(document.getElementById(id))
    return inputValue = document.getElementById(id).value; 
}


function getBalance(){
   return Number(document.getElementById('current-balance').innerText);
}
function setCurrentBalance(newBalance){
    document.getElementById('current-balance').textContent = newBalance;
    }
    

    document.getElementById('add-money-tab-btn').addEventListener('click', function(){
    document.getElementById('add-money').classList.remove('hidden');
    document.getElementById('cashout').classList.add('hidden');
    document.getElementById('send-money').classList.add('hidden');
})

document.getElementById('cashout-btn').addEventListener('click', function(){
    document.getElementById('cashout').classList.remove('hidden');
    document.getElementById('add-money').classList.add('hidden');
    document.getElementById('send-money').classList.add('hidden');
})  

document.getElementById('send-money-tab-btn').addEventListener('click', function(){
    document.getElementById('send-money').classList.remove('hidden');
    document.getElementById('add-money').classList.add('hidden');
    document.getElementById('cashout').classList.add('hidden');
})
