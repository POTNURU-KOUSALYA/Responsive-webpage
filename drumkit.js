
//Detecting button events
var numberOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}


//Detecting keyboard Events
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})
function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("SOUNDS/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio=new Audio("SOUNDS/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio=new Audio("SOUNDS/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio=new Audio("SOUNDS/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio=new Audio("SOUNDS/snare.mp3");
            audio.play();
        break;
        case "k":
            var audio=new Audio("SOUNDS/crash.mp3");
            audio.play();
        break;
        case "l":
            var audio=new Audio("SOUNDS/kick-bass.mp3");
            audio.play();
        break;
        default: console.log(buttonInnerHTML);

    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
