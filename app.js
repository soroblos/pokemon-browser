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
const modalContainer2 = document.querySelector('.modalcontainer2')
const modalContainer3 = document.querySelector('.modalcontainer3')
const modalContainer4 = document.querySelector('.modalcontainer4')
const modalContainer5 = document.querySelector('.modalcontainer5')
const modalContainer6 = document.querySelector('.modalcontainer6')
const modalContainer7 = document.querySelector('.modalcontainer7')
const modalContainer8 = document.querySelector('.modalcontainer8')
const modalContainer9 = document.querySelector('.modalcontainer9')
const modalContainer10 = document.querySelector('.modalcontainer10')
const modalContainer11 = document.querySelector('.modalcontainer11')




const hiddenContent = document.querySelector('.hiddenbody')
const hiddenContent1 = document.querySelector('.hiddenbody1')
const hiddenContent2 = document.querySelector('.hiddenbody2')
const hiddenContent3 = document.querySelector('.hiddenbody3')
const hiddenContent4 = document.querySelector('.hiddenbody4')
const hiddenContent5 = document.querySelector('.hiddenbody5')
const hiddenContent6 = document.querySelector('.hiddenbody6')
const hiddenContent7 = document.querySelector('.hiddenbody7')
const hiddenContent8 = document.querySelector('.hiddenbody8')
const hiddenContent9 = document.querySelector('.hiddenbody9')
const hiddenContent10 = document.querySelector('.hiddenbody10')
const hiddenContent11 = document.querySelector('.hiddenbody11')







const closeButton = document.querySelector('.closebutton')
const closeButton1 = document.querySelector('.closebutton1')
const closeButton2 = document.querySelector('.closebutton2')
const closeButton3 = document.querySelector('.closebutton3')
const closeButton4 = document.querySelector('.closebutton4')
const closeButton5 = document.querySelector('.closebutton5')
const closeButton6 = document.querySelector('.closebutton6')
const closeButton7 = document.querySelector('.closebutton7')
const closeButton8 = document.querySelector('.closebutton8')
const closeButton9 = document.querySelector('.closebutton9')
const closeButton10 = document.querySelector('.closebutton10')
const closeButton11 = document.querySelector('.closebutton11')






const openModalClick = document.querySelector('.popularpokemon')
const openModalClick1 = document.querySelector('.popularpokemon1')
const openModalClick2 = document.querySelector('.popularpokemon2')
const openModalClick3 = document.querySelector('.popularpokemon3')
const openModalClick4 = document.querySelector('.popularpokemon4')
const openModalClick5 = document.querySelector('.popularpokemon5')
const openModalClick6 = document.querySelector('.popularpokemon6')
const openModalClick7 = document.querySelector('.popularpokemon7')
const openModalClick8 = document.querySelector('.popularpokemon8')
const openModalClick9 = document.querySelector('.popularpokemon9')
const openModalClick10 = document.querySelector('.popularpokemon10')
const openModalClick11 = document.querySelector('.popularpokemon11')





// const openModalClick1 = document.querySelector('.popularpokemon')

const openModal = () => {
    modalContainer.classList.remove('hidden')

    hiddenContent.classList.remove('hidden')
}

const openModal1 = () => {
    modalContainer1.classList.remove('hidden')

    hiddenContent1.classList.remove('hidden')
}

const openModal2 = () => {
    modalContainer2.classList.remove('hidden')

    hiddenContent2.classList.remove('hidden')
}

const openModal3 = () => {
    modalContainer3.classList.remove('hidden')

    hiddenContent3.classList.remove('hidden')
}

const openModal4 = () => {
    modalContainer4.classList.remove('hidden')

    hiddenContent4.classList.remove('hidden')
}

const openModal5 = () => {
    modalContainer5.classList.remove('hidden')

    hiddenContent5.classList.remove('hidden')
}

const openModal6 = () => {
    modalContainer6.classList.remove('hidden')

    hiddenContent6.classList.remove('hidden')
}

const openModal7 = () => {
    modalContainer7.classList.remove('hidden')

    hiddenContent7.classList.remove('hidden')
}

const openModal8 = () => {
    modalContainer8.classList.remove('hidden')

    hiddenContent8.classList.remove('hidden')
}

const openModal9 = () => {
    modalContainer9.classList.remove('hidden')

    hiddenContent9.classList.remove('hidden')
}

const openModal10 = () => {
    modalContainer10.classList.remove('hidden')

    hiddenContent10.classList.remove('hidden')
}

const openModal11 = () => {
    modalContainer11.classList.remove('hidden')

    hiddenContent11.classList.remove('hidden')
}







openModalClick.addEventListener("click", openModal)
openModalClick1.addEventListener("click", openModal1)
openModalClick2.addEventListener("click", openModal2)
openModalClick3.addEventListener("click", openModal3)
openModalClick4.addEventListener("click", openModal4)
openModalClick5.addEventListener("click", openModal5)
openModalClick6.addEventListener("click", openModal6)
openModalClick7.addEventListener("click", openModal7)
openModalClick8.addEventListener("click", openModal8)
openModalClick9.addEventListener("click", openModal9)
openModalClick10.addEventListener("click", openModal10)
openModalClick11.addEventListener("click", openModal11)







const closeModal = () => {
    modalContainer.classList.add('hidden')
    hiddenContent.classList.add('hidden')
}


const closeModal1 = () => {
    modalContainer1.classList.add('hidden')
    hiddenContent1.classList.add('hidden')
}

const closeModal2 = () => {
    modalContainer2.classList.add('hidden')
    hiddenContent2.classList.add('hidden')
}

const closeModal3 = () => {
    modalContainer3.classList.add('hidden')
    hiddenContent3.classList.add('hidden')
}

const closeModal4 = () => {
    modalContainer4.classList.add('hidden')
    hiddenContent4.classList.add('hidden')
}

const closeModal5 = () => {
    modalContainer5.classList.add('hidden')
    hiddenContent5.classList.add('hidden')
}

const closeModal6 = () => {
    modalContainer6.classList.add('hidden')
    hiddenContent6.classList.add('hidden')
}

const closeModal7 = () => {
    modalContainer7.classList.add('hidden')
    hiddenContent7.classList.add('hidden')
}

const closeModal8 = () => {
    modalContainer8.classList.add('hidden')
    hiddenContent8.classList.add('hidden')
}

const closeModal9 = () => {
    modalContainer9.classList.add('hidden')
    hiddenContent9.classList.add('hidden')
}

const closeModal10 = () => {
    modalContainer10.classList.add('hidden')
    hiddenContent10.classList.add('hidden')
}

const closeModal11 = () => {
    modalContainer11.classList.add('hidden')
    hiddenContent11.classList.add('hidden')
}




closeButton.addEventListener('click', closeModal)
closeButton1.addEventListener('click', closeModal1)
closeButton2.addEventListener('click', closeModal2)
closeButton3.addEventListener('click', closeModal3)
closeButton4.addEventListener('click', closeModal4)
closeButton5.addEventListener('click', closeModal5)
closeButton6.addEventListener('click', closeModal6)
closeButton7.addEventListener('click', closeModal7)
closeButton8.addEventListener('click', closeModal8)
closeButton9.addEventListener('click', closeModal9)
closeButton10.addEventListener('click', closeModal10)
closeButton11.addEventListener('click', closeModal11)




hiddenContent.addEventListener('click', closeModal)
hiddenContent1.addEventListener('click', closeModal1)
hiddenContent2.addEventListener('click', closeModal2)
hiddenContent3.addEventListener('click', closeModal3)
hiddenContent4.addEventListener('click', closeModal4)
hiddenContent5.addEventListener('click', closeModal5)
hiddenContent6.addEventListener('click', closeModal6)
hiddenContent7.addEventListener('click', closeModal7)
hiddenContent8.addEventListener('click', closeModal8)
hiddenContent9.addEventListener('click', closeModal9)
hiddenContent10.addEventListener('click', closeModal10)
hiddenContent11.addEventListener('click', closeModal11)



// window.onload = (event) => {
fetch('https://pokeapi.co/api/v2/pokemon/greninja')
    .then(response => { return response.json() })
    .then(json => {
        console.log(json)
        document.querySelector('#name').innerText = json.name
        document.querySelector('#abilities').innerText = json.abilities[0].ability.name
        document.querySelector('#abilities2').innerText = json.abilities[1].ability.name
        // document.querySelector('#moves').innerText = json.moves.forEach(element => { return element }).move
        document.querySelector('#moves').innerText = json.moves[0].move.name
        document.querySelector('#moves1').innerText = json.moves[1].move.name
        document.querySelector('#moves2').innerText = json.moves[2].move.name
        document.querySelector('#moves3').innerText = json.moves[3].move.name
        document.querySelector('#moves4').innerText = json.moves[4].move.name
        document.querySelector('#moves5').innerText = json.moves[5].move.name
        document.querySelector('#moves6').innerText = json.moves[6].move.name
        document.querySelector('#moves7').innerText = json.moves[7].move.name
        document.querySelector('#moves8').innerText = json.moves[8].move.name
        document.querySelector('#moves9').innerText = json.moves[9].move.name
        document.querySelector('#type').innerText = json.types[0].type.name
        document.querySelector('#type1').innerText = json.types[1].type.name
        document.querySelector('#base-exp').innerText = json.base_experience
        document.querySelector('#hp').innerText = json.stats[0].base_stat
        document.querySelector('#attack').innerText = json.stats[1].base_stat
        document.querySelector('#defense').innerText = json.stats[2].base_stat
        document.querySelector('#speed').innerText = json.stats[5].base_stat

    }),
    (err => console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/lucario')
    .then(response => { return response.json() })
    .then(json => {
        console.log(json)
        document.querySelector('#namea').innerText = json.name
        document.querySelector('#abilitiesa').innerText = json.abilities[0].ability.name
        document.querySelector('#abilitiesa2').innerText = json.abilities[1].ability.name
        // document.querySelector('#moves').innerText = json.moves.forEach(element => { return element }).move
        document.querySelector('#movesa').innerText = json.moves[0].move.name
        document.querySelector('#movesa1').innerText = json.moves[1].move.name
        document.querySelector('#movesa2').innerText = json.moves[2].move.name
        document.querySelector('#movesa3').innerText = json.moves[3].move.name
        document.querySelector('#movesa4').innerText = json.moves[4].move.name
        document.querySelector('#movesa5').innerText = json.moves[5].move.name
        document.querySelector('#movesa6').innerText = json.moves[6].move.name
        document.querySelector('#movesa7').innerText = json.moves[7].move.name
        document.querySelector('#movesa8').innerText = json.moves[8].move.name
        document.querySelector('#movesa9').innerText = json.moves[9].move.name
        document.querySelector('#typea').innerText = json.types[0].type.name
        document.querySelector('#typea1').innerText = json.types[1].type.name
        document.querySelector('#base-expa').innerText = json.base_experience
        document.querySelector('#hpa').innerText = json.stats[0].base_stat
        document.querySelector('#attacka').innerText = json.stats[1].base_stat
        document.querySelector('#defensea').innerText = json.stats[2].base_stat
        document.querySelector('#speeda').innerText = json.stats[5].base_stat

    }),
    (err => console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/lugia')
    .then(response => { return response.json() })
    .then(json => {
        console.log(json)
        document.querySelector('#nameb').innerText = json.name
        document.querySelector('#abilitiesb').innerText = json.abilities[0].ability.name
        document.querySelector('#abilitiesb2').innerText = json.abilities[1].ability.name
        // document.querySelector('#moves').innerText = json.moves.forEach(element => { return element }).move
        document.querySelector('#movesb').innerText = json.moves[0].move.name
        document.querySelector('#movesb1').innerText = json.moves[1].move.name
        document.querySelector('#movesb2').innerText = json.moves[2].move.name
        document.querySelector('#movesb3').innerText = json.moves[3].move.name
        document.querySelector('#movesb4').innerText = json.moves[4].move.name
        document.querySelector('#movesb5').innerText = json.moves[5].move.name
        document.querySelector('#movesb6').innerText = json.moves[6].move.name
        document.querySelector('#movesb7').innerText = json.moves[7].move.name
        document.querySelector('#movesb8').innerText = json.moves[8].move.name
        document.querySelector('#movesb9').innerText = json.moves[9].move.name
        document.querySelector('#typeb').innerText = json.types[0].type.name
        document.querySelector('#typeb1').innerText = json.types[1].type.name
        document.querySelector('#base-expb').innerText = json.base_experience
        document.querySelector('#hpb').innerText = json.stats[0].base_stat
        document.querySelector('#attackb').innerText = json.stats[1].base_stat
        document.querySelector('#defenseb').innerText = json.stats[2].base_stat
        document.querySelector('#speedb').innerText = json.stats[5].base_stat

    }),
    (err => console.log(err));
// }
fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    .then(response => { return response.json() })
    .then(json => {
        console.log(json)
        document.querySelector('#namec').innerText = json.name
        document.querySelector('#abilitiesc').innerText = json.abilities[0].ability.name
        document.querySelector('#abilitiesbc').innerText = json.abilities[1].ability.name
        // document.querySelector('#moves').innerText = json.moves.forEach(element => { return element }).move
        document.querySelector('#movesc').innerText = json.moves[0].move.name
        document.querySelector('#movesc1').innerText = json.moves[1].move.name
        document.querySelector('#movesc2').innerText = json.moves[2].move.name
        document.querySelector('#movesc3').innerText = json.moves[3].move.name
        document.querySelector('#movesc4').innerText = json.moves[4].move.name
        document.querySelector('#movesc5').innerText = json.moves[5].move.name
        document.querySelector('#movesc6').innerText = json.moves[6].move.name
        document.querySelector('#movesc7').innerText = json.moves[7].move.name
        document.querySelector('#movesc8').innerText = json.moves[8].move.name
        document.querySelector('#movesc9').innerText = json.moves[9].move.name
        document.querySelector('#typec').innerText = json.types[0].type.name
        document.querySelector('#typec1').innerText = json.types[1].type.name
        document.querySelector('#base-expc').innerText = json.base_experience
        document.querySelector('#hpc').innerText = json.stats[0].base_stat
        document.querySelector('#attackc').innerText = json.stats[1].base_stat
        document.querySelector('#defensec').innerText = json.stats[2].base_stat
        document.querySelector('#speedc').innerText = json.stats[5].base_stat

    }),
    (err => console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/umbreon')
    .then(response => { return response.json() })
    .then(json => {
        console.log(json)
        document.querySelector('#named').innerText = json.name
        document.querySelector('#abilitiesd').innerText = json.abilities[0].ability.name
        document.querySelector('#abilitiesbd').innerText = json.abilities[1].ability.name
        // document.querySelector('#moves').innerText = json.moves.forEach(element => { return element }).move
        document.querySelector('#movesd').innerText = json.moves[0].move.name
        document.querySelector('#movesd1').innerText = json.moves[1].move.name
        document.querySelector('#movesd2').innerText = json.moves[2].move.name
        document.querySelector('#movesd3').innerText = json.moves[3].move.name
        document.querySelector('#movesd4').innerText = json.moves[4].move.name
        document.querySelector('#movesd5').innerText = json.moves[5].move.name
        document.querySelector('#movesd6').innerText = json.moves[6].move.name
        document.querySelector('#movesd7').innerText = json.moves[7].move.name
        document.querySelector('#movesd8').innerText = json.moves[8].move.name
        document.querySelector('#movesd9').innerText = json.moves[9].move.name
        document.querySelector('#typed').innerText = json.types[0].type.name
        // document.querySelector('#typed1').innerText = json.types[1].type.name
        document.querySelector('#base-expd').innerText = json.base_experience
        document.querySelector('#hpd').innerText = json.stats[0].base_stat
        document.querySelector('#attackd').innerText = json.stats[1].base_stat
        document.querySelector('#defensed').innerText = json.stats[2].base_stat
        document.querySelector('#speedd').innerText = json.stats[5].base_stat

    }),
    (err => console.log(err));
fetch('https://pokeapi.co/api/v2/pokemon/sylveon')
    .then(response => { return response.json() })
    .then(json => {
        console.log(json)
        document.querySelector('#namee').innerText = json.name
        document.querySelector('#abilitiese').innerText = json.abilities[0].ability.name
        document.querySelector('#abilitiese2').innerText = json.abilities[1].ability.name
        // document.querySelector('#moves').innerText = json.moves.forEach(element => { return element }).move
        document.querySelector('#movese').innerText = json.moves[0].move.name
        document.querySelector('#movese1').innerText = json.moves[1].move.name
        document.querySelector('#movese2').innerText = json.moves[2].move.name
        document.querySelector('#movese3').innerText = json.moves[3].move.name
        document.querySelector('#movese4').innerText = json.moves[4].move.name
        document.querySelector('#movese5').innerText = json.moves[5].move.name
        document.querySelector('#movese6').innerText = json.moves[6].move.name
        document.querySelector('#movese7').innerText = json.moves[7].move.name
        document.querySelector('#movese8').innerText = json.moves[8].move.name
        document.querySelector('#movese9').innerText = json.moves[9].move.name
        document.querySelector('#typee').innerText = json.types[0].type.name
        // document.querySelector('#typee1').innerText = json.types[1].type.name
        document.querySelector('#base-expe').innerText = json.base_experience
        document.querySelector('#hpe').innerText = json.stats[0].base_stat
        document.querySelector('#attacke').innerText = json.stats[1].base_stat
        document.querySelector('#defensee').innerText = json.stats[2].base_stat
        document.querySelector('#speede').innerText = json.stats[5].base_stat

    }),
    (err => console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/garchomp')
    .then(response => { return response.json() })
    .then(json => {
        console.log(json)
        document.querySelector('#namef').innerText = json.name
        document.querySelector('#abilitiesf').innerText = json.abilities[0].ability.name
        document.querySelector('#abilitiesf2').innerText = json.abilities[1].ability.name
        // document.querySelector('#moves').innerText = json.moves.forEach(element => { return element }).move
        document.querySelector('#movesf').innerText = json.moves[0].move.name
        document.querySelector('#movesf1').innerText = json.moves[1].move.name
        document.querySelector('#movesf2').innerText = json.moves[2].move.name
        document.querySelector('#movesf3').innerText = json.moves[3].move.name
        document.querySelector('#movesf4').innerText = json.moves[4].move.name
        document.querySelector('#movesf5').innerText = json.moves[5].move.name
        document.querySelector('#movesf6').innerText = json.moves[6].move.name
        document.querySelector('#movesf7').innerText = json.moves[7].move.name
        document.querySelector('#movesf8').innerText = json.moves[8].move.name
        document.querySelector('#movesf9').innerText = json.moves[9].move.name
        document.querySelector('#typef').innerText = json.types[0].type.name
        document.querySelector('#typef1').innerText = json.types[1].type.name
        document.querySelector('#base-expf').innerText = json.base_experience
        document.querySelector('#hpf').innerText = json.stats[0].base_stat
        document.querySelector('#attackf').innerText = json.stats[1].base_stat
        document.querySelector('#defensef').innerText = json.stats[2].base_stat
        document.querySelector('#speedf').innerText = json.stats[5].base_stat

    }),
    (err => console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/rayquaza')
    .then(response => { return response.json() })
    .then(json => {
        console.log(json)
        document.querySelector('#nameg').innerText = json.name
        document.querySelector('#abilitiesg').innerText = json.abilities[0].ability.name
        // document.querySelector('#abilitiesg2').innerText = json.abilities[1].ability.name
        // // document.querySelector('#moves').innerText = json.moves.forEach(element => { return element }).move
        document.querySelector('#movesg').innerText = json.moves[0].move.name
        document.querySelector('#movesg1').innerText = json.moves[1].move.name
        document.querySelector('#movesg2').innerText = json.moves[2].move.name
        document.querySelector('#movesg3').innerText = json.moves[3].move.name
        document.querySelector('#movesg4').innerText = json.moves[4].move.name
        document.querySelector('#movesg5').innerText = json.moves[5].move.name
        document.querySelector('#movesg6').innerText = json.moves[6].move.name
        document.querySelector('#movesg7').innerText = json.moves[7].move.name
        document.querySelector('#movesg8').innerText = json.moves[8].move.name
        document.querySelector('#movesg9').innerText = json.moves[9].move.name
        document.querySelector('#typeg').innerText = json.types[0].type.name
        document.querySelector('#typeg1').innerText = json.types[1].type.name
        document.querySelector('#base-expg').innerText = json.base_experience
        document.querySelector('#hpg').innerText = json.stats[0].base_stat
        document.querySelector('#attackg').innerText = json.stats[1].base_stat
        document.querySelector('#defenseg').innerText = json.stats[2].base_stat
        document.querySelector('#speedg').innerText = json.stats[5].base_stat

    }),
    (err => console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/gardevoir')
    .then(response => { return response.json() })
    .then(json => {
        console.log(json)
        document.querySelector('#nameh').innerText = json.name
        document.querySelector('#abilitiesh').innerText = json.abilities[0].ability.name
        document.querySelector('#abilitiesh2').innerText = json.abilities[1].ability.name
        // document.querySelector('#moves').innerText = json.moves.forEach(element => { return element }).move
        document.querySelector('#movesh').innerText = json.moves[0].move.name
        document.querySelector('#movesh1').innerText = json.moves[1].move.name
        document.querySelector('#movesh2').innerText = json.moves[2].move.name
        document.querySelector('#movesh3').innerText = json.moves[3].move.name
        document.querySelector('#movesh4').innerText = json.moves[4].move.name
        document.querySelector('#movesh5').innerText = json.moves[5].move.name
        document.querySelector('#movesh6').innerText = json.moves[6].move.name
        document.querySelector('#movesh7').innerText = json.moves[7].move.name
        document.querySelector('#movesh8').innerText = json.moves[8].move.name
        document.querySelector('#movesh9').innerText = json.moves[9].move.name
        document.querySelector('#typeh').innerText = json.types[0].type.name
        document.querySelector('#typeh1').innerText = json.types[1].type.name
        document.querySelector('#base-exph').innerText = json.base_experience
        document.querySelector('#hph').innerText = json.stats[0].base_stat
        document.querySelector('#attackh').innerText = json.stats[1].base_stat
        document.querySelector('#defenseh').innerText = json.stats[2].base_stat
        document.querySelector('#speedh').innerText = json.stats[5].base_stat

    }),
    (err => console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/gengar')
    .then(response => { return response.json() })
    .then(json => {
        console.log(json)
        document.querySelector('#namei').innerText = json.name
        document.querySelector('#abilitiesi').innerText = json.abilities[0].ability.name
        // document.querySelector('#abilitiesi2').innerText = json.abilities[1].ability.name
        // document.querySelector('#moves').innerText = json.moves.forEach(element => { return element }).move
        document.querySelector('#movesi').innerText = json.moves[0].move.name
        document.querySelector('#movesi1').innerText = json.moves[1].move.name
        document.querySelector('#movesi2').innerText = json.moves[2].move.name
        document.querySelector('#movesi3').innerText = json.moves[3].move.name
        document.querySelector('#movesi4').innerText = json.moves[4].move.name
        document.querySelector('#movesi5').innerText = json.moves[5].move.name
        document.querySelector('#movesi6').innerText = json.moves[6].move.name
        document.querySelector('#movesi7').innerText = json.moves[7].move.name
        document.querySelector('#movesi8').innerText = json.moves[8].move.name
        document.querySelector('#movesi9').innerText = json.moves[9].move.name
        document.querySelector('#typei').innerText = json.types[0].type.name
        document.querySelector('#typei1').innerText = json.types[1].type.name
        document.querySelector('#base-expi').innerText = json.base_experience
        document.querySelector('#hpi').innerText = json.stats[0].base_stat
        document.querySelector('#attacki').innerText = json.stats[1].base_stat
        document.querySelector('#defensei').innerText = json.stats[2].base_stat
        document.querySelector('#speedi').innerText = json.stats[5].base_stat

    }),
    (err => console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/tyranitar')
    .then(response => { return response.json() })
    .then(json => {
        console.log(json)
        document.querySelector('#namej').innerText = json.name
        document.querySelector('#abilitiesj').innerText = json.abilities[0].ability.name
        document.querySelector('#abilitiesj2').innerText = json.abilities[1].ability.name
        // document.querySelector('#moves').innerText = json.moves.forEach(element => { return element }).move
        document.querySelector('#movesj').innerText = json.moves[0].move.name
        document.querySelector('#movesj1').innerText = json.moves[1].move.name
        document.querySelector('#movesj2').innerText = json.moves[2].move.name
        document.querySelector('#movesj3').innerText = json.moves[3].move.name
        document.querySelector('#movesj4').innerText = json.moves[4].move.name
        document.querySelector('#movesj5').innerText = json.moves[5].move.name
        document.querySelector('#movesj6').innerText = json.moves[6].move.name
        document.querySelector('#movesj7').innerText = json.moves[7].move.name
        document.querySelector('#movesj8').innerText = json.moves[8].move.name
        document.querySelector('#movesj9').innerText = json.moves[9].move.name
        document.querySelector('#typej').innerText = json.types[0].type.name
        document.querySelector('#typej1').innerText = json.types[1].type.name
        document.querySelector('#base-expj').innerText = json.base_experience
        document.querySelector('#hpj').innerText = json.stats[0].base_stat
        document.querySelector('#attackj').innerText = json.stats[1].base_stat
        document.querySelector('#defensej').innerText = json.stats[2].base_stat
        document.querySelector('#speedj').innerText = json.stats[5].base_stat

    }),
    (err => console.log(err));

fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    .then(response => { return response.json() })
    .then(json => {
        console.log(json)
        document.querySelector('#namek').innerText = json.name
        document.querySelector('#abilitiesk').innerText = json.abilities[0].ability.name
        document.querySelector('#abilitiesk2').innerText = json.abilities[1].ability.name
        // document.querySelector('#moves').innerText = json.moves.forEach(element => { return element }).move
        document.querySelector('#movesk').innerText = json.moves[0].move.name
        document.querySelector('#movesk1').innerText = json.moves[1].move.name
        document.querySelector('#movesk2').innerText = json.moves[2].move.name
        document.querySelector('#movesk3').innerText = json.moves[3].move.name
        document.querySelector('#movesk4').innerText = json.moves[4].move.name
        document.querySelector('#movesk5').innerText = json.moves[5].move.name
        document.querySelector('#movesk6').innerText = json.moves[6].move.name
        document.querySelector('#movesk7').innerText = json.moves[7].move.name
        document.querySelector('#movesk8').innerText = json.moves[8].move.name
        document.querySelector('#movesk9').innerText = json.moves[9].move.name
        document.querySelector('#typek').innerText = json.types[0].type.name
        document.querySelector('#typek1').innerText = json.types[1].type.name
        document.querySelector('#base-expk').innerText = json.base_experience
        document.querySelector('#hpk').innerText = json.stats[0].base_stat
        document.querySelector('#attackk').innerText = json.stats[1].base_stat
        document.querySelector('#defensek').innerText = json.stats[2].base_stat
        document.querySelector('#speedk').innerText = json.stats[5].base_stat

    }),
    (err => console.log(err));