// handleClick();
console.log(document.querySelectorAll("button")[6]);


// array length

let totalButton = document.querySelectorAll("button").length;

for(let i = 0; i < totalButton ; i++) {
    console.log(i);
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        this.style.color="blue";

        switch(this.innerHTML){
            case "w" :
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
            case "a" :
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
            case "s" :
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
            case "d" :
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            case "j" :
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
            case "k" :
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
            case "l" :
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
            default:
            

        }
        
    });
}

// Tugas

function keyboardSound(key) {
    let audio;
    let button;

    switch(key) {
        case "w":
            audio = new Audio('sounds/tom-1.mp3');
            button = document.querySelector(".w");
            break;
        case "a":
            audio = new Audio('sounds/tom-2.mp3');
            button = document.querySelector(".a");
            break;
        case "s":
            audio = new Audio('sounds/tom-3.mp3');
            button = document.querySelector(".s");
            break;
        case "d":
            audio = new Audio('sounds/tom-4.mp3');
            button = document.querySelector(".d");
            break;
        case "j":
            audio = new Audio('sounds/snare.mp3');
            button = document.querySelector(".j");
            break;
        case "k":
            audio = new Audio('sounds/crash.mp3');
            button = document.querySelector(".k");
            break;
        case "l":
            audio = new Audio('sounds/kick-bass.mp3');
            button = document.querySelector(".l");
            break;
        default:
            return;
    }

    audio.play();
    animateButton(button);
}

function animateButton(button) {
    button.classList.add('animated');
    setTimeout(() => {
        button.classList.remove('animated');
    }, 200);
}

let buttons = document.querySelectorAll(".drum");
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML;
        keyboardSound(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    keyboardSound(event.key);
});

