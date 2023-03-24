let imgs = document.querySelectorAll('.work img');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let counter = 0;

prevBtn.addEventListener('click', () => {
    counter--;
    slider();
});

nextBtn.addEventListener('click', () => {
    counter++;
    slider();
});

const slider = () => {
    imgs.forEach(img => {
        if (window.innerWidth < '781') {
            img.style.transform = `translate(${-(270 * counter)}px)`;
        } else if (window.innerWidth < '991') {
            img.style.transform = `translate(${-(420 * counter)}px)`;
        } else {
            img.style.transform = `translate(${-(560 * counter)}px)`;
        }
    });

    if (counter <= -2) {
        prevBtn.style.pointerEvents = 'none';
        prevBtn.style.backgroundColor = '#7a746e';
    } else{
        prevBtn.style.pointerEvents = 'auto';
        prevBtn.style.backgroundColor = 'black';
    }

    if (counter >= 2) {
        nextBtn.style.pointerEvents = 'none';
        nextBtn.style.backgroundColor = '#7a746e';
    } else{
        nextBtn.style.pointerEvents = 'auto';
        nextBtn.style.backgroundColor = 'black';
    }
}
slider();

window.addEventListener('resize', slider);