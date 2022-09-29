let slideIndex = 1;

ShowSlide(slideIndex);

function nextSlide() {
    ShowSlide(slideIndex += 1);
}

function previousSlide() {
    ShowSlide(slideIndex -= 1);
}

function currentSlide(n) {
    ShowSlide(slideIndex = n);
}

function ShowSlide(n){
    let slides = document.getElementsByClassName("clients-feedback-slider-item")
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(let slide of slides){
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}