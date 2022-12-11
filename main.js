const closeButton = document.querySelector(".toggle__menu");
const sideBar = document.querySelector(".toggle-nav");

closeButton.addEventListener("click" , (e) => {
    sideBar.classList.toggle("toggle-nav")
})


