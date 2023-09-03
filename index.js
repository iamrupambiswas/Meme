var noOfButtons = document.querySelectorAll(".drum").length;

for(i=0;i<noOfButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
    {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

function makeSound(key)
{
    switch(key)
        {
            case "BSDK":
            var tom1 = new Audio("./Audio/BSDK.mp3");
            tom1.play()
            break;

            case "ChalaJa":
            var tom2 = new Audio("./Audio/ChalaJa.mp3");
            tom2.play()
            break;

            case "Key":
            var tom3 = new Audio("./Audio/Key.mp3");
            tom3.play()
            break;

            case "LaLa":
            var tom4 = new Audio("./Audio/LaLa.mp3");
            tom4.play()
            break;

            case "MCD":
            var crash = new Audio("./Audio/MCD.mp3");
            crash.play()
            break;

            case "Nahi":
            var kick_bass = new Audio("./Audio/Nahi.mp3");
            kick_bass.play()
            break;
            
            case "Pyaari":
            var snare = new Audio("./Audio/Pyaari.mp3");
            snare.play()
            break;

            default:
        }
}


function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200)
}
