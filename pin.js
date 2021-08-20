function getPin(){
 const pin=Math.round(Math.random()*10000);
 const pinString=pin + '';
 if(pinString.length==4){
     return pin;
 }
 else{
     return getPin();
 }
}
function generatorpin(){
   const pin=getPin();
   document.getElementById('display-pin').value=pin;
}

document.getElementById('key').addEventListener('click',function(event){
    const number=event.target.innerText;
    const displayInput=document.getElementById('display');
    if(isNaN(number)){
        if(number=='C'){
            displayInput.value='';
        }
    }
    else{
        const inputeNumber=displayInput.value;
        const newNumber=inputeNumber + number;
        displayInput.value=newNumber;
    }  
})
function button(){
    const pin= document.getElementById('display-pin').value;
    const pinNumber=document.getElementById('display').value;
    const success=document.getElementById('success');
    const opp=document.getElementById('opp');
    if(pin==pinNumber){
        success.style.display='block';
        opp.style.display='none';
    }
    else{
        success.style.display='none';
       opp.style.display='block';
    }
}
