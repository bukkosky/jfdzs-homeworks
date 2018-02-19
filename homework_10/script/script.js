//slider:

var slideIndex = 1;

movieSlider(slideIndex);

function movieSlider(n) {

    var slides = document.getElementsByClassName("my-slider");
    var dots = document.getElementsByClassName("indicators");

    if (n > slides.length) {
        slideIndex = 1
    };

    if (n < 1) {
        slideIndex = slides.length
    };

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.add("mySlides");
    };
    for(var i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].classList.remove("mySlides");
    dots[slideIndex - 1].classList.add("active");

};

function nextPrevSlide(n) {
    movieSlider(slideIndex += n);
};

function currentSlide(n) {
    movieSlider(slideIndex = n);
};

autoSlide()

function autoSlide() {
    var slides = document.getElementsByClassName("my-slider");

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.add("mySlides");
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].classList.remove("mySlides");
    setTimeout(autoSlide, 3000);
};
