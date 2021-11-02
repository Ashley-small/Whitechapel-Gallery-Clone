const menuIcon = document.querySelector('.hamburger-menu');
const navlist = document.querySelector('.nav-list')


menuIcon.addEventListener("click",changeIcon);

function changeIcon(){
menuIcon.classList.toggle("change")
navlist.classList.toggle("active")
document.body.classList.toggle("fixed")
};


const navMenu= document.querySelector ("nav-list");

menuIcon


document.getElementById("dropbtn").addEventListener("click", dropdownList);

function dropdownList() {
document.getElementById("myDropdown").classList.toggle("show");
};

window.addEventListener("scroll", stickyNav);

let navbar = document.querySelector('.scrolling');
let sticky = navbar.offsetTop;

function stickyNav(){
navbar.classList.toggle("sticky", window.scrollY >0)

};

let slidePosition = 0;
let slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;


document.getElementById('carousel-button--next').addEventListener("click", nextSlide);

document.getElementById('carousel-button--prev').addEventListener("click", prevSlide);


 function hideAllSlides(){
   for (let key of slides) {
     slides[slidePosition].classList.remove("carousel-item-visible")
     slides[slidePosition].classList.remove("carousel-item-hidden")


   }
 }

function nextSlide() {
hideAllSlides()

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++
  }
  slides[slidePosition].classList.add("carousel-item-visible");
};

function prevSlide(){
  hideAllSlides()

  if(slidePosition === 0){
    totalSlides-1
  }else {
    slidePosition--
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}
