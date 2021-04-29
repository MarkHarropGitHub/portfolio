// Create a mobile nav

const homeHamburger = document.getElementById('homeHamburger');
const homeNavUl = document.getElementById('homeNavUl');

homeHamburger.addEventListener('click', () => {
    homeNavUl.classList.toggle('show');
})

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


const slideImages = document.querySelectorAll('.slide');

const sliderFunction = (e) => {
    slideImages.forEach(slideImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        const imageBottom = slideImage.offsetTop + slideImage.height;
        const isHalfShown = slideInAt > slideImage.offsetTop;
        const notScrolledPast = window.scrollY < imageBottom;

        if(!isHalfShown && notScrolledPast) {
            slideImage.classList.add('active');
        } else {
            slideImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(sliderFunction));