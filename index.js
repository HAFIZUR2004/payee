// login-button-funtionality

document.getElementById('loginButton').addEventListener('click',function(){
    const mobileNumbers = 01726441994;
    const pinNumber    = 6437;
    const mobileNumberValue = document.getElementById
    ('mobileNumber').value
    const mobieNumberValueConvert = parseInt(mobileNumberValue)

    const pinNumberValue =document.getElementById('pinNumber').value
    const pinNumberValueConvert = parseInt(pinNumberValue)

    console.log(mobieNumberValueConvert,pinNumberValueConvert);


    if(mobieNumberValueConvert === mobileNumbers && pinNumberValueConvert === pinNumber){
    window.location.href ="./home.html"
    }
    else{
       alert('invalid');
    }

})











