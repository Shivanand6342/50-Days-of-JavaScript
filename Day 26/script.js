const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeslideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener("click", () => changeSlide('up'))
downButton.addEventListener("click", () => changeSlide('down'))


const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeslideIndex++;
        if(activeslideIndex > slidesLength - 1){
            activeslideIndex = 0
        }
    } 
    else if(direction === 'down'){
        activeslideIndex--
        if(activeslideIndex < 0){
            activeslideIndex = slidesLength - 1
        }
    }
    slideRight.style.transform = `translateY(-${activeslideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeslideIndex * sliderHeight}px)`
}