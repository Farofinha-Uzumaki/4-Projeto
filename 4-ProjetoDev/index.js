//! colocar alguma função em todos os buttons do drum;

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var t = this.innerHTML;
        sons(t);
        drumAnimation(t);
        especial(t);
    });
}
//! funcão para capitar o click e exibir seu som
function sons(event) {
    switch (event) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
    }
}
//* animação
function drumAnimation(event) {
    var buttonSelector = document.querySelector("." + event);
    buttonSelector.classList.add("pressed");
    setTimeout(function () {
        buttonSelector.classList.remove("pressed");
    }, 120);
}
var keys = [];
function especial(ev) {
    keys.push(ev);
    console.log(keys);
    if(keys.length == 7) {
    if (keys[0] == "w" && keys[1] == "a" && keys[2] == "s" && keys[3] == "d" && keys[4] == "j" && keys[5] == "k" && keys[6] == "l") {
        var corpo =
            document.querySelector("body").style.backgroundColor;
        document.querySelector("body").style.backgroundColor =
            "#df2a9a";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = corpo;
        }, 2000);
        keys.splice(0);
    } else {
        keys.splice(0);
    }
    
}}
function mudarNu() {
    
}
//! funcão para click do teclado
document.addEventListener("keydown", function (e) {
    sons(e.key);
    drumAnimation(e.key);
    especial(e.key);
})
