// export const getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     alert('hdhdjd')
//   }
// };

// const showPosition = () => {
//   x.innerHTML =
//     "Latitude: " +
//     position.coords.latitude +
//     "<br>Longitude: " +
//     position.coords.longitude;
// };

const carouselSlide = document.querySelector('.carousel-slide')
const carouselCard = document.querySelectorAll('.card')

const btnRight = document.querySelector('.btn-right')
const btnLeft = document.querySelector('.btn-left')

let counter = 1
const cardSize = carouselCard[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-(cardSize+7.5) * counter) + 'px)'

btnRight.addEventListener('click', () => {
    if (counter >= carouselCard.length - 1) return
    carouselSlide.style.transition = 'transform .4s ease-in-out'
    counter++
    carouselSlide.style.transform = 'translateX(' + (-(cardSize+7.5) * counter) + 'px)'
})

btnLeft.addEventListener('click', () => {
    if (counter <= 0) return
    carouselSlide.style.transition = 'transform .4s ease-in-out'
    counter--
    carouselSlide.style.transform = 'translateX(' + (-(cardSize+7.5) * counter) + 'px)'
})

carouselSlide.addEventListener('transitionend', () => {
    if (carouselCard[counter].id === 'lastClone' ) {
        carouselSlide.style.transition = 'none'
        counter = carouselCard.length - 2
        carouselSlide.style.transform = 'translateX(' + (-(cardSize+7.5) * counter) + 'px)'
    }
    if (carouselCard[counter].id === 'firstClone' ) {
        carouselSlide.style.transition = 'none'
        counter = carouselCard.length - counter
        carouselSlide.style.transform = 'translateX(' + (-(cardSize+7.5) * counter) + 'px)'
    }
})

