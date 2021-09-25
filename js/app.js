// slider

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.getElementById('carousel__button--next')
    .addEventListener('click', () => {
        moveToNextSlide()
    })

document.getElementById('carousel__button--prev')
    .addEventListener('click', () => {
        moveToPrevSlide()
    })

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible')
        slide.classList.add('carousel__item--hidden')
    }
    slides[slidePosition].classList.add('carousel__item--visible')
}

function moveToNextSlide() {

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }
    updateSlidePosition()
}

function moveToPrevSlide() {

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }
    updateSlidePosition()
}

// inputs

const inputs = document.querySelectorAll('input[type="text"]');
const select = document.querySelector('.gender')
const btn = document.querySelector('#btn')

function detectContent() {
    (this.value !== '')
        ? this.style.borderColor = '#8E43ED'
        : this.style.borderColor = '#D9BBFF'
}

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    input.addEventListener('keyup', detectContent, false);
}

select.addEventListener('click', () => {
    select.style.borderColor = '#8E43ED'
})

// disabled button

inp = document.querySelector('.inp')
btn.setAttribute('disabled', true)

inp.oninput = function () {
    if (inp.value.length < 1) {
        btn.setAttribute('disabled', true)
        btn.style.backgroundColor = '#DED9E4'
    } else {
        btn.removeAttribute('disabled')
        btn.style.backgroundColor = '#8E43ED'
    }
}
