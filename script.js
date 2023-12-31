
//Message----------------->

const newsletterMessageShow = document.querySelector('.newsletter__container'),
newsletterMessage = document.querySelector('.newsletter-message'),
newsletterMessageClose = document.querySelector('.newsletter-message__close');

newsletterMessageShow.addEventListener('click', () => {
    newsletterMessage.classList.add('active__newsletter-message');
});

newsletterMessageClose.addEventListener('click', () => {
    newsletterMessage.classList.remove('active__newsletter-message');
});

//Slider----------------->

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 
    arrowIcons[0].style.color = carousel.scrollLeft == 0 ? "#d9d9d9" : "#FF6200";
    arrowIcons[1].style.color = carousel.scrollLeft == scrollWidth ? "#d9d9d9" : "#FF6200";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 1;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});
const autoSlide = () => {
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 1;

    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { 
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {

    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {

    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

//Expand----------------->

const RozwinBtn = document.querySelector('.expand_section-rozwin'),
ZwinBtn = document.querySelector('.expand_section-zwin'),
ShowSection = document.querySelector('.expand_section'),
ShowText = document.querySelector('.expand_section ul');

ZwinBtn.classList.add('expand_section-hide');
ShowSection.classList.add('expand_section-disappear');
ShowText.classList.add('.text-disappear');

RozwinBtn.addEventListener('click', () => {
    RozwinBtn.classList.add('expand_section-hide');
    ZwinBtn.classList.remove('expand_section-hide');
    ShowSection.classList.remove('expand_section-disappear');
    ShowText.classList.remove('.text-disappear');
});
ZwinBtn.addEventListener('click', () => {
    RozwinBtn.classList.remove('expand_section-hide');
    ZwinBtn.classList.add('expand_section-hide');
    ShowSection.classList.add('expand_section-disappear');
});