let menuIcon = document.querySelector(".header__menu-mobile-icon");
let menuMobile = document.querySelector(".menu-mobile");

menuIcon.addEventListener("click", (event) => {
    menuMobile.classList.toggle("active");
});
