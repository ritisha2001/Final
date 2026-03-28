const navbartoggler = document.querySelector(".navbar-toggler");
const navlinks = document.getElementById("nav-links");

let nav = false;

function myfunction(){
if(nav == false){
navlinks.style.display = "block";
nav = true;
}
else{
    navlinks.style.display = "none";
    nav = false;
}
console.log(nav)
}
navbartoggler.addEventListener("click", myfunction);

//slider

const missonswiper = new Swiper(".misson-swiper", {
  loop: true,
    slidesPerView: "auto",
  spaceBetween: 40,
    clickable: true,
  pagination: {
    el: ".swiper-pagination",
        clickable: true,
          },
  breakpoints: {
    320: { slidesPerView: 1 },
    576:  {slidesPerView: 2 },
    993: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
});