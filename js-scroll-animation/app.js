function appearText(){
    var introText = document.querySelector(".intro-text");
    var textPosition = introText.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 1.4;

    if(textPosition < screenPosition) {
        introText.classList.add("intro-appear");
    }
}


window.addEventListener('scroll', appearText);