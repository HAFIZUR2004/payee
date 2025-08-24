const validPin = 6437

// add money-feture

document.getElementById("add-money-btn").addEventListener
('click',function(e){
    e.preventDefault()
    console.log('hello')

    const Bank =document.getElementById("bank").value 
    const accountNumber = document.getElementById("account-number").value
    const amount =parseInt (document.getElementById("amount").value)
    const pinNumber =parseInt(document.getElementById("pin-number").value)
    console.log(Bank,accountNumber,amount,pinNumber);

    if(accountNumber.length <11 ){
        alert("please provide valid number")
        return;
    }

    if(pinNumber !== validPin){
        alert("Please enter valid pin")
        return;
    }

    const availableBalance =parseInt(document.getElementById("available-balance").innerText)
    console.log(availableBalance)



    const totalNewAvaileableBalance = amount +availableBalance;
    document.getElementById("available-balance").innerText = totalNewAvaileableBalance
})






// cash-out-section

document.getElementById("withdraw-money-btn")
.addEventListener("click",function(e){
    e.preventDefault()
    

    const agentNumber = document.getElementById("agent-number").value
    const amount      =parseInt(document.getElementById("withdraw-cash-amount").value)
    const pInNumber   =parseInt(document.getElementById("pin-numbers").value)
    
    if(agentNumber.length <11){
        alert("Please provide valid number ")
        return;
    }
    if(pInNumber !== validPin){
        alert("Please Enter Valide Pin Number")
    return;
    }


    const availBalance =parseInt(document.getElementById("available-balance").innerText)
    const newTotalNewBalancee =availBalance-amount;
    console.log(newTotalNewBalancee);
    document.getElementById("available-balance").innerText =newTotalNewBalancee
})




// toggling feature


document.getElementById("cash-out-button" ).addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})
document.getElementById("add-money-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display ="block"
})



