function pinig(){
    var pin= Math.floor(Math.random()*10000);
const pinStr=pin + '';
if(pinStr.length ==4){
return pin;


}
else{
//var pin= Math.floor(Math.random()*10000);
//const pinStr=pin + '';
console.log(" 3 digit")
return pinig()
}
}
document.getElementById('pin-generator').addEventListener('click', function(){
  
  //console.log(pin)
  
    var pini= pinig();
    document.getElementById('pin').value=pini;
   // console.log(pini)
})

document.getElementById('calculator-pad').addEventListener('click', function(event){
//console.log(event.target.innerText)
var str="";
if(event.target.innerText !='Submit' && event.target.innerText !='C' && event.target.innerText !='<'){
var pinn=document.getElementById('display').value+=event.target.innerText;
}
var pini=document.getElementById('pin').value;
var genPin=parseInt(pini);
var pinni=document.getElementById('display').value;
pinDisplay=parseInt(pinni);
if(event.target.innerText=='Submit'){
   // console.log('submit')
    if(genPin == pinDisplay){
        //alert("matched")
        document.getElementById('pin-matched').classList='d-block text-white'
    }
    else{
   document.getElementById('unmatch').classList='d-block text-white'
    }
}

if(event.target.innerText=='C'){
    document.getElementById('display').value='';
}


});