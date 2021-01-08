// initialize variable slides
const slides = document.querySelectorAll('.slides');


const prevSlide = () => {
    // initialize activeSlide
    const activeSlide = document.querySelector('.active');

    // initialize counter will be used for slides array index
    let counter = 0;

    // traverse each slides array with item and index arguments
    slides.forEach((item, index) => {

        // check if item has active class traverse slides array and remove active class
        if (item === activeSlide) {
            slides.forEach(item => {
                item.classList.remove('active');
            });

            // if slides array index is equal to zero set counter to array length
            if (index == 0) {
                counter = slides.length - 1;
            } else {
                counter = index - 1; // else set counter equals index - 1
            }

            // add active class to current counter slide
            slides[counter].classList.add('active'); 
        }
    });
};

const nextSlide = () => {
    // initialize activeSlide
    const activeSlide = document.querySelector('.active');

    // initialize counter will be used for slides array index
    let counter = 0;

    // traverse slides array with item and index arguments
    slides.forEach((item, index) => {

        // if item has active class traverse slides array and remove active class
        if (item === activeSlide) {
            slides.forEach(item => {
                item.classList.remove('active');
            });

            // if slides array index is equal to array length set counter to zero
            if (index == slides.length - 1) {
                counter = 0;
            } else {
                counter = index + 1; // else set counter equals index + 1
            }

            // add active class to current counter slide
            slides[counter].classList.add('active');
        }
    });
};



// add event listener to prev button and callback prevSlide
document.querySelector('.prev')
  .addEventListener('click', prevSlide);

// add event listener to next button and callback nextSlide
document.querySelector('.next')
  .addEventListener('click', nextSlide);

// function to toggle modal window
const about = () => {
    document.querySelector('.modal-container')
    .classList.toggle('modal-active')
};

// add click event to about button and callback about function
document.querySelector('#about')
    .addEventListener('click', about);

// add click event to X button and callback about function
document.querySelector('#close')
    .addEventListener('click', about);