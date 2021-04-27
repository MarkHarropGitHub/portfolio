// Create a mobile nav

const homeHamburger = document.getElementById('homeHamburger');
const homeNavUl = document.getElementById('homeNavUl');

homeHamburger.addEventListener('click', () => {
    homeNavUl.classList.toggle('show');
})
