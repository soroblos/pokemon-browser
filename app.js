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

// document.getElementsByClassName('imagesection img').onclick = modal(() => {
//console.log('i clicked the button')
//     onclick = document.getElementById('modal1').style.display = 'inline'
// })
// document.getElementsByClass('image section img').onclick = () => { clickmodal() }
// clickmodal(onclick = document.getElementById('modal1').style.display = 'inline')

const modalContainer = document.querySelector('.modalcontainer')
const modalContainer1 = document.querySelector('.modalcontainer1')




const hiddenContent = document.querySelector('.hiddenbody')
const hiddenContent1 = document.querySelector('.hiddenbody1')






const closeButton = document.querySelector('.closebutton')
const closeButton1 = document.querySelector('.closebutton1')





const openModalClick = document.querySelector('.popularpokemon')
const openModalClick1 = document.querySelector('.popularpokemon1')





// const openModalClick1 = document.querySelector('.popularpokemon')

const openModal = () => {
    modalContainer.classList.remove('hidden')

    hiddenContent.classList.remove('hidden')
}

const openModal1 = () => {
    modalContainer1.classList.remove('hidden')

    hiddenContent1.classList.remove('hidden')
}








openModalClick.addEventListener("click", openModal)
openModalClick1.addEventListener("click", openModal1)







const closeModal = () => {
    modalContainer.classList.add('hidden')
    hiddenContent.classList.add('hidden')
}


const closeModal1 = () => {
    modalContainer1.classList.add('hidden')
    hiddenContent1.classList.add('hidden')
}





closeButton.addEventListener('click', closeModal)
closeButton1.addEventListener('click', closeModal1)





hiddenContent.addEventListener('click', closeModal)
hiddenContent1.addEventListener('click', closeModal1)

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

