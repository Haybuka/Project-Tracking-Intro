const harmburger = document.querySelector('#container nav .dropDown')
const harmburgerX = document.querySelector(' #container nav .canceldrop')
const nav = document.querySelector('#container nav ul')

harmburger.addEventListener('click', function () {
    nav.classList.toggle('open')
    console.log(this, harmburgerX, nav)
})