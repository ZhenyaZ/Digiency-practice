let slideIndexOurBlog = 1;

ShowSlideOurBlog(slideIndexOurBlog);

function nextSlideOurBlog() {
    ShowSlideOurBlog(slideIndexOurBlog += 1);
}

function previousSlideOurBlog() {
    ShowSlideOurBlog(slideIndexOurBlog -= 1);
}

function currentSlideOurBlog(n) {
    ShowSlideOurBlog(slideIndexOurBlog = n);
}

function ShowSlideOurBlog(n){
    let slides = document.getElementsByClassName("our-blog-slider-item")
    if(n > slides.length){
        slideIndexOurBlog = 1;
    }
    if(n < 1){
        slideIndexOurBlog = slides.length;
    }
    for(let slide of slides){
        slide.style.display = "none";
    }
    slides[slideIndexOurBlog - 1].style.display = "flex";
}