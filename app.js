console.log('hello world')

const imgset = document.querySelector('#imgset')

const slides = Array.from(imgset.children)
console.log(slides)

const leftButton = document.querySelector('.arrowbuttonleft')

const rightButton = document.querySelector('.arrowbuttonright')

const slideNav = document.querySelector('.slidenav')
console.log(slideNav)

const dots = Array.from(slideNav.children)
console.log(dots)

const slidesSize = slides[0].getBoundingClientRect()

const slideWidth = slidesSize.width

slides[0].style.left = 'px'
slides[1].style.left = slideWidth * 1 + 'px'
slides[2].style.left = slideWidth * 2 + 'px'
console.log(slideWidth)

rightButton.addEventListener('click', e => {
    let currentSlide = slides[0]
    const nextSlide = currentSlide.nextElementSibling
    const moveImage = nextSlide.style.left
    console.log(currentSlide)
    console.log(nextSlide)
    console.log(moveImage)
    nextSlide.style.transform = 'translateX(-' + moveImage + ')'
    // currentSlide.style.opacity = '0'
    // currentSlide.push(currentSlide.splice(0, 1)[0])
    slides.push(slides.splice(slides.indexOf(currentSlide), 1)[0])
    console.log(slides)
})


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

