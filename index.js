//For detcting click events from buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var key = this.innerHTML;
        playSound(key);
    });

}

//For detecting click events from keyboard
document.addEventListener("keydown", function(Event) {
    playSound(Event.key);
});

//For playing sound
function playSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
    
        default:
            console.log("ERROR! Key: " + key);
    }

    buttonAnimation(key);

}

//For playing animation
function buttonAnimation(currentKey) {
    
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    setTimeout(() => {
        activeKey.classList.remove("pressed");
    }, 100);

}
