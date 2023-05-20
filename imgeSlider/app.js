const slide = document.querySelector(".slide");
const slideImages = document.querySelectorAll(".slide img");

const prevBtn = document.getElementById("prevbtn");
const nextBtn = document.getElementById("nextbtn");

let count = 1;
const size = slideImages[0].clientWidth;

slide.style.transform = "translateX(" + (-size * count) + "px)";

nextBtn.addEventListener("click", () => {
    if (count >= slideImages.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    count++;
    slide.style.transform = "translateX(" + (-size * count) + "px)";
})
prevBtn.addEventListener("click", () => {
    if (count <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    count--;
    slide.style.transform = "translateX(" + (-size * count) + "px)";
})

slide.addEventListener('transitionend', () => {
    if (slideImages[count].id === "lastClone") {
        slide.style.transition = 'none';
        count = slideImages.length - 2;
        slide.style.transform = "translateX(" + (-size * count) + "px)";
    }
    if (slideImages[count].id === "firstClone") {
        slide.style.transition = 'none';
        count = slideImages.length - count;
        slide.style.transform = "translateX(" + (-size * count) + "px)";
    }
})