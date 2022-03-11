const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainslide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidescount = mainslide.querySelectorAll('div').length

let ActiveSlideIndex = 0

sidebar.style.top = `-${(slidescount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp'){
        changeSlide('up')
    } else if (event.key === 'ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        ActiveSlideIndex++
        if (ActiveSlideIndex === slidescount)
        {
            ActiveSlideIndex = 0
        }
    } else if (direction === 'down') {
        ActiveSlideIndex--
        if (ActiveSlideIndex < 0) {
            ActiveSlideIndex = slidescount - 1
        }
    }
    
    const height = container.clientHeight

    mainslide.style.transform = `translateY(-${ActiveSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${ActiveSlideIndex * height}px)`
}

