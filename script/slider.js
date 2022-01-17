var slideIndex

function showSlide() {
    var i
    var slides = document.getElementsByClassName('slideshows__img')
    var bullets = document.getElementsByClassName('bullet')

    /* console.log(slides[1]) */
    for(i = 0; i < slides.length; i++) {
        slides[i].style.zIndex = "18"
    }

    for(i = 0; i < bullets.length; i++) {
        bullets[i].classList.remove('bullet--active')
    }

    slides[slideIndex].style.zIndex = "20"
    bullets[slideIndex].classList.add('bullet--active')
    
    slideIndex++

    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }

    setTimeout(showSlide, 10000)
}

showSlide(slideIndex = 0)

function currentSlide(n) {
    slideIndex = n
    showSlide()
}