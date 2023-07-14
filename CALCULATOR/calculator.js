var display=document.querySelector('.display');
var buttons=document.querySelectorAll('button');


buttons.forEach(function(button){
    button.addEventListener('click',calculate);
});


//calculate function
function calculate(event){
    var clickedButtonValue=event.target.value;
    if(clickedButtonValue ==="="){
        //checking display is empty or not
        if(display.value!== " "){
            display.value=eval(display.value);
        }
    }
    else if(clickedButtonValue==='C'){
        display.value= " ";
    }
    else{
        display.value+=clickedButtonValue;
    }
}