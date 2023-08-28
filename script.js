//Message----------------->
const newsletterMessageShow = document.querySelector('.newsletter__container');
const newsletterMessage = document.querySelector('.newsletter-message');
const newsletterMessageClose = document.querySelector('.newsletter-message__close');

newsletterMessageShow.addEventListener('click', () => {
    newsletterMessage.classList.add('active__newsletter-message');
});

newsletterMessageClose.addEventListener('click', () => {
    newsletterMessage.classList.remove('active__newsletter-message');
});

//Slider----------------->