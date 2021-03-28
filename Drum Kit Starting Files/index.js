// //Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i=0; i<numberOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);


    });

}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event){

    makeSound(event.key);

});

    function makeSound(key) {

        switch (key) {

            case "w":
                buttonAnimation("w");
                var hat = new Audio("sounds/hat.wav");
                hat.play();
                break;

            case "a":
                buttonAnimation("a");
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "s":
                buttonAnimation("s");
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "d":
                buttonAnimation("d");
                var tom1 = new Audio("sounds/tom-1.wav");
                tom1.play();
                break;

            case "j":
                buttonAnimation("j");
                var kick = new Audio("sounds/kick-bass.wav");
                kick.play();
                break;

            case "k":
                buttonAnimation("k");
                var tom2 = new Audio("sounds/tom-2.wav");
                tom2.play();
                break;

            case "l":
                buttonAnimation("l");
                var tom3 = new Audio("sounds/tom-3.wav");
                tom3.play();
                break;

            default:;
        }



    }

    function buttonAnimation(currentKey) {
        
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);

    }