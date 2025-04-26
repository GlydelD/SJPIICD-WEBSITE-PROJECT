let currentIndex = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

 
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

   
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}


setInterval(() => {
    moveSlide(1); 
}, 9000);


const aboutBtn = document.querySelector('#aboutBtn');

aboutBtn.addEventListener('click', () => {
    const contactContainer = document.querySelector('.middle');
    
    if (contactContainer) {
        contactContainer.scrollIntoView({ behavior: 'smooth' });
    }
});